//https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/#gatsby-nodets
//https://dev.to/skil3e/how-to-use-gatsby-with-typescript-2d79
import type { GatsbyNode } from "gatsby"
import * as path from "path"
import { buildDirectusRequestUrl, createSearchIndex } from "./src/util/search"
import fetch from "node-fetch"

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions
}) => {
  const { createPage } = actions

  /* Standard pages */
  const standardTemplate = path.resolve(`src/templates/standard.tsx`);
  const standardPageResult = await graphql(`
    query {
      allFile(filter: {sourceInstanceName: {eq: "standard"}}) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `)
  //@ts-ignore
  standardPageResult.data.allFile.nodes.forEach((node: any) => {
    const { childMarkdownRemark: { frontmatter } } = node;
    const page = {
      path: frontmatter.slug == 'home' ? '/' : frontmatter.slug,
      component: standardTemplate,
      context: {
        title: frontmatter.title,
        slug: frontmatter.slug
      },
    }
    createPage(page)
  })

  /* Blog pages */
  const blogTemplate = path.resolve(`src/templates/blog.js`);
  const blogPageResult = await graphql(`
    query {
      allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `)
  //@ts-ignore
  blogPageResult.data.allFile.nodes.forEach((node: any) => {
    const { childMarkdownRemark: { frontmatter } } = node;
    const page = {
      path: frontmatter.slug,
      component: blogTemplate,
      context: {
        title: frontmatter.title,
        slug: frontmatter.slug
      },
    }
    createPage(page)
  })

  /* Object pages */
  const objectTemplate = path.resolve(`src/templates/object.tsx`)
  const objectTemplateResult = await graphql(`
  query {
    directusgraphql {
      miniatures {
        id
        title
        collection {
          id
          name
        }
        accession_number
        production_date_text
        artist_text
        artist_reference {
          id
          forename
          surname
        }
        sitter_text
        sitter_reference {
          id
          forename
          surname
        }
        description_content
        description_physical
        monogram
        dimensions_unframed_width
        dimensions_unframed_height
        pigments_background
        pigments_costume
        pigments_flesh_tones_and_lips
        pigments_hair_and_beard
        pigments_jewellery
        materials_supports
        analytical_techniques_used
        exhibitions {
          id
          exhibitions_id {
            id
            name
            start_date
            end_date            
            url
          }
        }
        references {
          id
          references_id {
            authors {
              authors_and_editors_id {
                display_name
                id
              }
            }
            display_title
            id
            publication_year
            url
          }
        }
        image_normal_light {
          id
          title
          filename_disk
          filename_download
        }
        image_raking_light {
          id
          title
          filename_disk
          filename_download
        }
        image_infrared {
            id
            title
            filename_disk
            filename_download
        }
        image_uv {
            id
            title
            filename_disk
            filename_download
        }
        image_xray {
            id
            title
            filename_disk
            filename_download
        }
        image_verso {
            id
            title
            filename_disk
            filename_download
        }
        images_micrographs {
          id
          file_name
          hotspot
          description
          micrograph {
            id
          }
        }
        slug
        object_record_in_collection
        Credit
      }
    }
  }`,
    {});
  // @ts-ignore
  objectTemplateResult.data.directusgraphql.miniatures.forEach(miniatureObject => {
    createPage({
      path: 'object/' + miniatureObject.slug,
      component: objectTemplate,
      context: { ...miniatureObject },
    })
  });
}

export const onCreatePage: GatsbyNode["onCreatePage"] = async ({
  page,
  actions
}) => {
  const { createPage } = actions;
  let context = {
    ...page.context
  }
  if (page.path == "/collections/") {

    const response = await fetch(buildDirectusRequestUrl())
    const miniatures = await response.json()
    const searchIndex = createSearchIndex(miniatures.data)
    const miniaturesMap: { [id: number]: MiniatureItemInterface } = {};
    miniatures.data.forEach((item: MiniatureItemInterface) => {
      miniaturesMap[parseInt(item.id!!)] = item;
    })

    context = {
      ...page.context,
      miniatures: miniaturesMap,
      serialisedSearchIndex: searchIndex
    }
  }
  createPage({
    ...page,
    context
  });
}

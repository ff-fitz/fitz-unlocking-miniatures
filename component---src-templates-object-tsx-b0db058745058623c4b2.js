(self.webpackChunkgatsby_fitzwilliam_miniatures=self.webpackChunkgatsby_fitzwilliam_miniatures||[]).push([[926],{3344:function(e,t){"use strict";var l={pathPrefix:"/fitz-unlocking-miniatures",siteMetadata:{title:"Fitzwilliam Miniatures",siteUrl:"https://unlocking-miniatures.fitzmuseum.cam.ac.uk/",mainMenu:[{link:"/",title:"Home"},{link:"/collections",title:"Collections"},{link:"/about",title:"About"},{link:"/blog",title:"Blog"}],quickLinks:[{link:"/",title:"Home"},{link:"/collections",title:"Collections"},{link:"/about",title:"About"}],contact:[{line:"portraitminiatures [at] fitzmuseum.cam.ac.uk"},{line:"The Fitzwilliam Museum"},{line:"University of Cambridge"}],footerLogos:[{image_src:"../../content/assets/main-banner-image.jpeg",image_alt:"Logo"}],api:{url:"https://unlocking-miniatures.fitz.ms/",collections:{miniatures:"items/miniatures"}},iiif:{url:"https://miniatures-iiif.fitzmuseum.cam.ac.uk/"},viewer:{url:"https://miniatures-mirador.fitzmuseum.cam.ac.uk/"}},graphqlTypegen:!0,plugins:["gatsby-plugin-image","gatsby-plugin-react-helmet","gatsby-plugin-sitemap","gatsby-plugin-mdx","gatsby-plugin-sharp","gatsby-transformer-sharp",{resolve:"gatsby-plugin-sass"},{resolve:"gatsby-source-filesystem",options:{name:"assets",path:"//content/assets"}},{resolve:"gatsby-source-filesystem",options:{name:"standard",path:"//content/standard"}},{resolve:"gatsby-source-filesystem",options:{name:"blog",path:"//content/blog"}},{resolve:"gatsby-transformer-remark",options:{plugins:[{resolve:"gatsby-remark-images",options:{maxWidth:1280}},{resolve:"gatsby-remark-responsive-iframe",options:{wrapperStyle:"margin-bottom: 1.0725rem"}},"gatsby-remark-autolink-headers","gatsby-remark-copy-linked-files"]}},{resolve:"gatsby-plugin-react-svg",options:{rules:{include:"src/assets/svg"}}},{resolve:"gatsby-source-graphql",options:{typeName:"DirectusGraphQL",fieldName:"directusgraphql",url:"https://unlocking-miniatures.fitz.ms/graphql"}}]};t.Z=l},11:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return d}});var n=l(1721),a=l(7294),i=l(8378),r=l(3344),s=l(6100),c=l.n(s),m=[{field:"image_normal_light",label:"Normal light"},{field:"image_raking_light",label:"Raking light"},{field:"image_infrared",label:"Infrared"},{field:"image_uv",label:"Ultraviolet"},{field:"image_xray",label:"X-Ray"},{field:"image_verso",label:"Verso"}],o=function(e){function t(t){return e.call(this,t)||this}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this.props.miniature;return a.createElement("div",{className:"object--images"},m.filter((function(t){return null!=(null==e?void 0:e[t.field])})).map((function(t){var l=e[t.field],n=r.Z.siteMetadata.api.url+"assets/"+l.id+"?format=jpg&width=300&quality=80",i=l.title,s=r.Z.siteMetadata.api.url+"assets/"+l.id+"?format=jpg";return a.createElement("div",{id:l.id},a.createElement("a",{href:s,target:"__blank"},a.createElement("img",{loading:"lazy",src:n,alt:i})),a.createElement("p",null,a.createElement("a",{href:"#"+l.id},a.createElement("strong",null,t.label)),a.createElement("div",null,l.title)),a.createElement("a",{href:s,target:"__blank"},"Open full size"))})))},t}(a.Component),u=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){var e,t,l,n,s,m,u,d,g=(null===(e=this.props)||void 0===e||null===(t=e.pageResources)||void 0===t||null===(l=t.json)||void 0===l?void 0:l.pageContext)||{image_normal_light:{id:"",title:""},collection:{name:""}},p=r.Z.siteMetadata.api.url+"assets/"+g.image_normal_light.id+"?format=jpg&height=200&quality=80",E=g.image_normal_light.title;return a.createElement(i.Z,{displayLogo:!1},a.createElement("div",{className:"object"},a.createElement("div",{className:"object--hero-wrapper"},a.createElement("div",{className:"object--hero-content"},a.createElement("h1",null,g.title),a.createElement("div",{className:"object--hero-info"},a.createElement("img",{src:p,alt:E}),a.createElement("div",{className:"object--hero-info-table"},a.createElement("div",null,a.createElement("strong",null,"Accession number")),a.createElement("div",null,g.accession_number),g.object_record_in_collection&&a.createElement(a.Fragment,null,a.createElement("div",null,a.createElement("a",{href:g.object_record_in_collection,target:"__blank"},"Object record")),a.createElement("div",null)),a.createElement("div",null,a.createElement("strong",null,"Production date")),a.createElement("div",null,g.production_date_text),a.createElement("div",null,a.createElement("strong",null,"Artist")),a.createElement("div",null,g.artist_text),a.createElement("div",null,a.createElement("strong",null,"Sitter")),a.createElement("div",null,g.sitter_text),g.collection&&a.createElement(a.Fragment,null,a.createElement("div",null,a.createElement("strong",null,"Collection")),a.createElement("div",null,null===(n=g.collection)||void 0===n?void 0:n.name)),g.Credit&&a.createElement(a.Fragment,null,a.createElement("div",null,a.createElement("strong",null,"Credit")),a.createElement("div",null,g.Credit)))))),a.createElement("div",{className:"object--actions-wrapper"},a.createElement("div",{className:"miniature-items object--actions"},a.createElement("a",{className:"miniature-item__button",href:r.Z.siteMetadata.viewer.url+"?manifestId[]="+(r.Z.siteMetadata.iiif.url+g.accession_number)+"/manifest.json"},a.createElement("span",{className:"icon"},a.createElement(c(),null)),a.createElement("span",null,"Viewer")),a.createElement("a",{href:"#description"},a.createElement("h2",{id:"description"},"Description")),a.createElement("a",{href:"#images"},a.createElement("h2",null,"Images")),g.images_micrographs&&g.images_micrographs.length>0&&a.createElement("a",{href:"#micrographs"},a.createElement("h2",null,"Micrographs")))),a.createElement("div",{className:"object--description-wrapper"},a.createElement("div",{className:"object--description-content"},a.createElement("a",{href:"#description"},a.createElement("h2",{id:"description"},"Description")),a.createElement("div",null,g.description_content),a.createElement("div",null,g.description_physical),a.createElement("table",null,a.createElement("tr",null,a.createElement("td",null,"Dimensions"),a.createElement("td",null,g.dimensions_unframed_width," x ",g.dimensions_unframed_height," mm")),a.createElement("tr",null,a.createElement("td",null,"Materials"),a.createElement("td",null,g.materials_supports)),a.createElement("tr",null,a.createElement("td",null,"Analytical techniques"),a.createElement("td",null,(null===(s=g.analytical_techniques_used)||void 0===s?void 0:s.join(", "))||""))),a.createElement("div",{className:"object--description-pigments"},a.createElement("a",{href:"#pigments"},a.createElement("h3",{id:"pigments"},"Pigments")),a.createElement("table",null,a.createElement("tr",null,a.createElement("td",null,"Background"),a.createElement("td",null,g.pigments_background)),a.createElement("tr",null,a.createElement("td",null,"Costume"),a.createElement("td",null,g.pigments_costume)),a.createElement("tr",null,a.createElement("td",null,"Jewellery"),a.createElement("td",null,g.pigments_jewellery)),a.createElement("tr",null,a.createElement("td",null,"Flesh tones and lips"),a.createElement("td",null,g.pigments_flesh_tones_and_lips)),a.createElement("tr",null,a.createElement("td",null,"Hair and beard"),a.createElement("td",null,g.pigments_hair_and_beard)))),a.createElement("div",{className:"object--description-exhibitions"},a.createElement("a",{href:"#exhibitions"},a.createElement("h3",{id:"exhibitions"},"Exhibitions")),(null==g||null===(m=g.exhibitions)||void 0===m?void 0:m.map((function(e){return a.createElement("div",null,a.createElement("a",{href:e.exhibitions_id.url,target:"__blank"},e.exhibitions_id.name+" "+e.exhibitions_id.start_date+"-"+e.exhibitions_id.end_date))})))||a.createElement("div",null)),a.createElement("div",{className:"object--description-references"},a.createElement("a",{href:"#references"},a.createElement("h3",{id:"references"},"References")),a.createElement("table",null,(null==g||null===(u=g.references)||void 0===u?void 0:u.map((function(e){return a.createElement("tr",null,!!e.references_id.url&&a.createElement("td",null,a.createElement("a",{href:e.references_id.url,target:"__blank"},e.references_id.display_title)),!e.references_id.url&&a.createElement("td",null,e.references_id.display_title),a.createElement("td",null,e.references_id.publication_year||""),a.createElement("td",null,e.references_id.authors.map((function(e){return e.authors_and_editors_id.display_name})).join("; ")))})))||a.createElement("div",null))),a.createElement("a",{href:"#images"},a.createElement("h2",{id:"images"},"Images")),a.createElement(o,{miniature:g}),g.images_micrographs&&g.images_micrographs.length>0&&a.createElement("a",{href:"#micrographs"},a.createElement("h2",{id:"micrographs"},"Micrographs")),a.createElement("div",{className:"object--micrographs"},g.images_micrographs&&(null===(d=g.images_micrographs)||void 0===d?void 0:d.map((function(e){var t=r.Z.siteMetadata.api.url+"assets/"+e.micrograph.id+"?format=jpg",l=r.Z.siteMetadata.api.url+"assets/"+e.micrograph.id+"?format=jpg&height=200&quality=80",n=e.file_name;return a.createElement("div",{id:e.file_name},a.createElement("a",{href:t,target:"__blank"},a.createElement("img",{loading:"lazy",src:l,alt:n})),a.createElement("p",null,a.createElement("a",{href:"#"+e.file_name},a.createElement("strong",null,e.file_name)),!!e.hotspot&&a.createElement("span",null," Hotspot"),a.createElement("div",null,e.description)),a.createElement("a",{href:t,target:"__blank"},"Open full size"))}))))))))},t}(a.Component),d=u},6100:function(e,t,l){var n=l(7294);function a(e){return n.createElement("svg",e,[n.createElement("path",{d:"M0 0h24v24H0z",fill:"none",key:0}),n.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z",key:1})])}a.defaultProps={height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",preserveAspectRatio:"xMidYMid meet"},e.exports=a,a.default=a}}]);
//# sourceMappingURL=component---src-templates-object-tsx-b0db058745058623c4b2.js.map
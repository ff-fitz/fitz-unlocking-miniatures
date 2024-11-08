import * as React from "react"
import { Link } from 'gatsby'
import '../styles/styles.scss'
import { isExternalUrl } from "../util";

interface MainMenuProps {
    readonly menu: Array<any>
}

const MainMenu: React.FC<MainMenuProps> = ({ menu }) => {
    const items: any = [];
    menu.forEach((item, index) => {
        const link = isExternalUrl(item.link) ? (<a href={item.link}>{item.title}</a>) : (<Link to={item.link}>{item.title}</Link>)
        items.push(<li key={item.link + index}>{link}</li>)
    })
    return <ul className="main-menu">{items}</ul>
}

export default MainMenu

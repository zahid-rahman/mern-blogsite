import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ content: sidebarLinks }) => {
    console.log(sidebarLinks)

    const links = sidebarLinks.map((link) => {
        return <Link className="list-group-item list-group-item-action list-group-item-light p-3" to={link.link}>{link.linkTitle}</Link>
    })

    return (
        <div className="border-end bg-white" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
            <div className="list-group list-group-flush">
                {links}
            </div>
        </div>
    )
}

export default Sidebar;
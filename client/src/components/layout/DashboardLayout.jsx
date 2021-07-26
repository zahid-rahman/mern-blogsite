import React, { useState } from 'react'
import DashboardNav from '../Navbar/DashboardNav'
import Sidebar from '../sidebar/Sidebar'
import './DashboardLayout.css'
import sidebarLinks from './../../links/sidebar/bloggerLinks.json'

const DashboardLayout = ({ pageContent }) => {

    const [isToggled, setIsToggled] = useState(false)

    const openToggle = () => {
        setIsToggled(true)
    }

    const offToggle = () => {
        setIsToggled(false)
    }

    return (
        <div className={!isToggled ? "d-flex" : "d-flex toggled"} id="wrapper">
            {/* Sidebar*/}
            <Sidebar content={sidebarLinks} />
            {/* Page content wrapper*/}
            <div id="page-content-wrapper">
                {/* Top navigation*/}
                <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                    <div className="container-fluid">
                        {!isToggled ?
                            <button className="btn btn-dark" id="sidebarToggle" onClick={openToggle} style={{ color: "#fff" }}>
                                <i class="fas fa-bars"></i>
                            </button>
                            :
                            <button className="btn btn-dark" id="sidebarToggle" onClick={offToggle} style={{ color: "#fff" }}>
                                <i class="fas fa-bars"></i>
                            </button>
                        }
                        <DashboardNav />
                    </div>
                </nav>
                {/* Page content*/}
                <div className="container-fluid">
                    {pageContent()}
                </div>
            </div>
        </div>

    )
}

export default DashboardLayout

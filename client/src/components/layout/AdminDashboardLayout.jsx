import React, { useState } from 'react';
import adminLinks from '../../links/sidebar/AdminLinks.json';
import DashboardNav from '../Navbar/DashboardNav';
import Sidebar from '../sidebar/Sidebar';

const AdminDashboardLayout = ({ pageContent }) => {
    const [isToggled, setIstoggleled] = useState(false)

    const openToggle = () => {
        setIstoggleled(true)
    }

    const offToggle = () => {
        setIstoggleled(false)
    }

    return (
        <div className={!isToggled ? "d-flex" : "d-flex toggled"} id="wrapper">
            {/* Sidebar*/}
            <Sidebar content={adminLinks} />
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
                <div className="container-fluid" id="page-content" style={{ overflowY: "scroll", height: '900px' }}>
                    {pageContent()}
                </div>
            </div>
        </div>
    )
}

export default AdminDashboardLayout;
import React from 'react'
import Footer from '../footer/Footer'
import NavigationBar from '../Navbar/NavigationBar'

const SiteLayout = ({ siteContent }) => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            {siteContent()}
            <Footer></Footer>
        </div>
    )
}

export default SiteLayout

import React from 'react'
import './Footer.css'

const Footer = () => {
    const referenceSiteUrl = 'https://zahid-rahman.netlify.app'
    return (
        <div className="footer">
            <p>Copyright @2018 <a href={referenceSiteUrl}>zahid rahman</a></p>
        </div>
    )
}

export default Footer

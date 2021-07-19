import React from 'react'
import SiteLayout from '../layout/SiteLayout'
import bannerImage from '../../images/blog-banner.jpg'
import Banner from '../Banner/Banner'
import { Container } from 'react-bootstrap'
const About = () => {

    const aboutPageContent = () => {
        return (
            <>
                <Banner image={bannerImage}></Banner>
                <Container>
                    <h1 className="text-center p-5">about page</h1>
                </Container>
            </>
        )
    }

    return (
        <SiteLayout siteContent={aboutPageContent}></SiteLayout>
    )
}

export default About

import React from 'react'
import SiteLayout from '../layout/SiteLayout'
import bannerImage from '../../images/blog-banner.jpg'
import Banner from '../Banner/Banner'
import { Container } from 'react-bootstrap'

const Cotnact = () => {

    const contactPageContent = () => {
        return (
            <>
                <Banner image={bannerImage}></Banner>
                <Container>
                    <h1 className="text-center p-5">contact page</h1>
                </Container>
            </>
        )
    }

    return (
        <SiteLayout siteContent={contactPageContent}></SiteLayout>
    )
}

export default Cotnact

import React from 'react'
import { Helmet } from 'react-helmet'

const Title = ({ pageTitle }) => {
    return (
        <>
            <Helmet>
                <title>Blogsite-{pageTitle}</title>
            </Helmet>
        </>
    )
}

export default Title
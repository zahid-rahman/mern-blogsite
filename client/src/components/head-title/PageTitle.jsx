import React from 'react'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'

const Title = ({ pageTitle }) => {
    const siteTitle = useSelector(state => state.siteTitle)
    return (
        <>
            <Helmet>
                <title>{siteTitle.toString()}-{pageTitle}</title>
            </Helmet>
        </>
    )
}

export default Title
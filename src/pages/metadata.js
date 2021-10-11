import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Metadata = ({ title, description }) => {
    const { site: { siteMetadata } } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `
    )

    const metaTitle = title ?? siteMetadata.title
    const metaDescription = description ?? siteMetadata.description

    return (
        <Helmet>
            <title>{`${metaTitle} | ${siteMetadata.title}`}</title>
            <meta name='description' content={metaDescription} />
        </Helmet>
    )
}

export default Metadata
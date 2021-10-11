import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

import * as postStyles from "./blogPost.module.scss"
import Metadata from '../pages/metadata'

export const query = graphql`
    query ($slug: String!) {
      markdownRemark(fields: {slug: {eq: $slug}}) {
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          featured {
            childImageSharp {
              fluid(maxWidth: 750){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        timeToRead
        html
      }
    }
`

const BlogPost = ({ data: { markdownRemark: blog } }) => {
    return (
        <Layout>
            <Metadata title={blog.frontmatter.title} />
            <div className={postStyles.content}>
                <h1>{blog.frontmatter.title}</h1>
                <span className={postStyles.meta}>
                    Posted on {blog.frontmatter.date}{" "}
                    <span> / </span> {blog.timeToRead} min read
                </span>
                {blog.frontmatter.featured &&
                    <Img
                        fluid={blog.frontmatter.featured.childImageSharp.fluid}
                        alt={blog.frontmatter.title}
                        className={postStyles.featured}
                    />
                }
                <div dangerouslySetInnerHTML={{ __html: blog.html }} />
            </div>
        </Layout>
    )
}

export default BlogPost
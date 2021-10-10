import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export const query = graphql`
    query ($slug: String!) {
      markdownRemark(fields: {slug: {eq: $slug}}) {
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
        }
        timeToRead
        html
      }
    }
`

const BlogPost = ({ data: { markdownRemark: blog } }) => {
    return (
        <Layout>
            <div>
                <h1>{blog.frontmatter.title}</h1>
                <span>
                    Posted on {blog.frontmatter.date}{" "}
                    <span> / </span> {blog.timeToRead} min read
                </span>
                <div dangerouslySetInnerHTML={{ __html: blog.html }} />
            </div>
        </Layout>
    )
}

export default BlogPost
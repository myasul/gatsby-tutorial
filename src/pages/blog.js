import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Layout from '../components/layout'

const Blog = () => {
    const { allMarkdownRemark: { edges: blogs } } = useStaticQuery(
        graphql`
            query {
            allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
                edges {
                  node {
                    frontmatter {
                      title
                      date(formatString: "DD MMM, YYYY")
                    }
                    timeToRead
                    excerpt
                    id
                    fields {
                      slug
                    }
                  }
                }
              }
            }
        `
    )

    return (
        <Layout>
            <ul>
                {blogs.map(blog => {
                    return (
                        <li key={blog.node.id}>
                            <h2>
                                <Link to={`/blog/${blog.node.fields.slug}`}>
                                    {blog.node.frontmatter.title}
                                </Link>
                            </h2>
                            <div>
                                <span>
                                    Posted on {blog.node.frontmatter.date} <span> / </span> {" "}
                                    {blog.node.timeToRead} min read
                                </span>
                            </div>
                            <p>{blog.node.excerpt}</p>
                            <div>
                                <Link to={`/blog/${blog.node.fields.slug}`}>Read More</Link>
                            </div>
                        </li>
                    )
                })
                }
            </ul>
        </Layout>
    )
}

export default Blog

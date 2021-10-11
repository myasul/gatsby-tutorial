import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import * as blogStyles from "./blog.module.scss"
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
                      featured {
                        childImageSharp {
                          fluid(maxWidth: 750){
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
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
            <ul className={blogStyles.posts}>
                {blogs.map(blog => {
                    return (
                        <li className={blogStyles.post} key={blog.node.id}>
                            <h2>
                                <Link to={`/blog/${blog.node.fields.slug}`}>
                                    {blog.node.frontmatter.title}
                                </Link>
                            </h2>
                            <div className={blogStyles.meta}>
                                <span>
                                    Posted on {blog.node.frontmatter.date} <span> / </span> {" "}
                                    {blog.node.timeToRead} min read
                                </span>
                            </div>
                            {blog.node.frontmatter.featured &&
                                <Img
                                    className={blogStyles.featured}
                                    fluid={blog.node.frontmatter.featured.childImageSharp.fluid}
                                    alt={blog.node.frontmatter.title}
                                />
                            }
                            <p className={blogStyles.excerpt}>{blog.node.excerpt}</p>
                            <div className={blogStyles.button}>
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

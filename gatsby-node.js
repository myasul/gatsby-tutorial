const path = require('path')

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    const { fileAbsolutePath, internal: { type } } = node

    if (type === 'MarkdownRemark') {
        const slug = path.basename(fileAbsolutePath, ".md")
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const { data: { allMarkdownRemark: { edges: blogs } } } = await graphql(`
        query {
          allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
    `)

    blogs.forEach(blog => {
        const { node: { fields: { slug } } } = blog

        createPage({
            path: `/blog/${slug}`,
            component: path.resolve("./src/templates/blog-post.js"),
            context: { slug }
        })
    })
}
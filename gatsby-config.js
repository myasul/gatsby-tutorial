/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: "Matthew Yasul",
        description: "I write code, lift weights, and drink coffee",
        author: "Matt.Y"
    },
    plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'src',
            path: `${__dirname}/src/`
        }
    }
    ],
}

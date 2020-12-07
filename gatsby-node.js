/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

/**
 * Adds a `slug` property to each of the MarkdownRemark
 * node types. This ultimately determines where the
 * path to each Markdown file lives on the site.
 */
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

/**
 * Tap into the `createPages` API to generate one page per
 * Markdown file parsed. Note that any variables passed into
 * the `context` parameter below are also available in the
 * GraphQL query on each page.
 */
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
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

  if (result.errors) {
    reporter.panicOnBuild(result.errors)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: "/docs" + node.fields.slug,
      component: path.resolve(`./src/components/docs/doc.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

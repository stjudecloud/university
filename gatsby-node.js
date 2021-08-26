/**
import getFileContributors from './src/utils/github';
import getFileContributors from './src/utils/github';
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { registerGithubFields } = require(`./src/utils/github`)

/**
 * Borrowed from https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-filesystem/src/create-file-path.js#L4-L27
 * as they don't export this by default.
 */
function findFileNode({ node, getNode }) {
  // Find the file node.
  let fileNode = node

  let whileCount = 0
  while (
    fileNode.internal.type !== `File` &&
    fileNode.parent &&
    getNode(fileNode.parent) !== undefined &&
    whileCount < 101
  ) {
    fileNode = getNode(fileNode.parent)

    whileCount += 1
    if (whileCount > 100) {
      console.log(
        `It looks like you have a node that's set its parent as itself`,
        fileNode
      )
    }
  }

  return fileNode
}

const createFileRelativePath = ({ node, getNode }) => {
  // Find the File node
  const fileNode = findFileNode({ node, getNode })
  if (!fileNode) return undefined

  const relativePath = slash(fileNode.relativePath)
  return path.posix.join(`/`, relativePath)
}

/**
 * Adds a `slug` property to each of the MarkdownRemark
 * node types. This ultimately determines where the
 * path to each Markdown file lives on the site.
 */
exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const relativeFilepath = "/docs" + createFileRelativePath({ node, getNode })
    const slug = "/docs" + createFilePath({ node, getNode })

    createNodeField({
      node,
      name: `relativeFilepath`,
      value: relativeFilepath,
    })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })

    if (process.env.GITHUB_TOKEN) {
      await registerGithubFields(relativeFilepath, node, createNodeField)
    } else {
      createNodeField({
        node,
        name: `commits`,
        value: null,
      })
      createNodeField({
        node,
        name: `contributors`,
        value: null,
      })
    }
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
      path: node.fields.slug,
      component: path.resolve(`./src/components/docs/doc.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

exports.createSchemaCustomization = ({ actions, reporter }) => {
  const { createTypes } = actions

  if (!process.env?.GITHUB_TOKEN) {
    reporter.warn(
      "No GITHUB_TOKEN was passed in, so any information pulled from \n" +
        "a GitHub API request (e.g. contributors and commits) will not \n" +
        "be included in this build! If you're developing locally, you can ignore \n" +
        "this. If you see this in a production build, however, the lack \n" +
        "of the GITHUB_TOKEN env variable means contributors and commit history \n" +
        "embedded within each doc page will be missing."
    )
  }

  const typeDefs = `
    type MarkdownRemark implements Node {
      fields: Fields
    }

    type Fields {
      relativeFilepath: String!
      slug: String!
      commits: [Commit!]
      contributors: [Contributor!]
    }

    type Contributor {
      login: String!
      avatar_url: String
      url: String!
      commits: Int
    }

    type Commit {
      url: String!
      message: String!
      date: String!
      author: Contributor!
      committer: Contributor!
    }
  `
  createTypes(typeDefs)
}

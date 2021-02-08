const escapeStringRegexp = require("escape-string-regexp")
const indexName = `docs`
const pageQuery = `{
  pages: allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "/" },
    }
  ) {
    edges {
      node {
        id
        frontmatter {
            title
        }
        fields {
          slug
        }
        excerpt(pruneLength: 100000)
      }
    }
  }
}`

function pageToAlgoliaRecord({
  node: {
    id,
    frontmatter,
    fields: { slug },
    ...rest
  },
}) {
  return {
    objectID: id,
    ...frontmatter,
    slug,
    ...rest,
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries

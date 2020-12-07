/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Navbar from "../navbar"
import { ContentsSidebarLeft, ActionSidebarRight } from "./sidebars"
import SearchModal from "../search"

class BaseLayout extends Component {
  static defaultProps = {
    searchModal: null,
  }

  render() {
    const { markdownRemark } = this.props.data
    const { pathname } = this.props.location
    const { html, fileAbsolutePath } = markdownRemark

    if (!markdownRemark.frontmatter?.title) {
      console.error(
        `Error! You must add a title frontmatter to ${fileAbsolutePath}. Example:\n\n---\ntitle: Making a Data Request\n---\n\nat the top of the file.`
      )
      throw new Error("Please see the error from the console above.")
    }

    return (
      <div className="bg-white text-gray-500 antialiased js-focus-visible">
        <SearchModal
          ref={element => (this.searchModal = element)}
          algoliaIndex="docs"
        />
        <Navbar
          app={"Docs"}
          includeSearch={true}
          onSearchClick={event => {
            event.preventDefault()
            this.searchModal.setVisible(true)
          }}
        />
        <ContentsSidebarLeft location={pathname} />
        <ActionSidebarRight fileAbsolutePath={fileAbsolutePath} />
        <main className="min-w-screen min-h-screen">
          <div className="container px-20 pt-1 max-w-full md:max-w-4xl mx-auto">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </main>
        <footer>
          © {new Date().getFullYear()}, St. Jude Children's Research Hospital
        </footer>
      </div>
    )
  }
}

export default BaseLayout

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fileAbsolutePath
      frontmatter {
        title
      }
    }
  }
`

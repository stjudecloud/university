/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { Component } from "react"
import PropTypes from "prop-types"

import Navbar from "../components/navbar"
import { ContentsSidebarLeft, ActionSidebarRight } from "../components/sidebars"
import SearchModal from "../components/search"

class BaseLayout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    fileAbsolutePath: PropTypes.node.isRequired,
  }

  static defaultProps = {
    searchModal: null,
  }

  render() {
    const { children, fileAbsolutePath } = this.props

    return (
      <div className="bg-white text-gray-500 antialiased js-focus-visible">
        <SearchModal
          ref={element => (this.searchModal = element)}
          algoliaIndex="docs"
        />
        <Navbar
          onSearchClick={event => {
            event.preventDefault()
            this.searchModal.setVisible(true)
          }}
        />
        <ContentsSidebarLeft />
        <ActionSidebarRight fileAbsolutePath={fileAbsolutePath} />
        <main className="min-w-screen min-h-screen">{children}</main>
        <footer>
          © {new Date().getFullYear()}, St. Jude Children's Research Hospital
        </footer>
      </div>
    )
  }
}

export default BaseLayout

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { Component } from "react"
import { graphql, Link } from "gatsby"

import Navbar from "../navbar"
import { ContentsSidebarLeft, ActionSidebarRight } from "./sidebars"
import SearchModal from "../search"

import { ToastContainer } from "react-toastify"
import DocFooterNavigation from "./footer"

class BaseLayout extends Component {
  static defaultProps = {
    searchModal: null,
  }

  constructor(props) {
    super(props)
    this.state = { isMobileMenuOpen: false }
  }

  openMobileMenu = () => {
    this.setState({ isMobileMenuOpen: true })
  }

  closeMobileMenu = () => {
    this.setState({ isMobileMenuOpen: false })
  }

  render() {
    const {
      configYaml: { domains },
      markdownRemark,
    } = this.props.data
    const { pathname } = this.props.location
    const { html, fileAbsolutePath } = markdownRemark

    let currentModule = null

    let longestMatchingPathPrefix = -1
    for (let j = 0; j < domains.length; j++) {
      const modules = domains[j].modules
      for (let i = 0; i < modules.length; i++) {
        if (
          pathname.startsWith(modules[i].path) &&
          modules[i].path.length > longestMatchingPathPrefix
        ) {
          currentModule = modules[i]
          longestMatchingPathPrefix = modules[i].path.length
          break
        }
      }
    }

    if (!currentModule) {
      throw new Error(`Could not find current module for page: ${pathname}.`)
    }

    const {
      icon: currentIcon,
      title: currentTitle,
      chapters: currentChapters,
    } = currentModule
    const CurrentIconImported = require("../../images/icons/" + currentIcon)

    const flattenedChapters = []
    currentChapters.forEach(chapter => {
      chapter.pages.forEach(page => {
        flattenedChapters.push({ ...page, chapter: chapter.title })
      })
    })

    let previousPage = null
    let currentPage = null
    let nextPage = null

    for (let i = 0; i < flattenedChapters.length; i++) {
      if (flattenedChapters[i].path == pathname) {
        currentPage = flattenedChapters[i]
        if (i > 0) {
          previousPage = flattenedChapters[i - 1]
        }

        if (i < flattenedChapters.length - 1) {
          nextPage = flattenedChapters[i + 1]
        }
        break
      }
    }

    if (!markdownRemark.frontmatter?.title) {
      console.error(
        `Error! You must add a title frontmatter to ${fileAbsolutePath}. Example:\n\n---\ntitle: Making a Data Request\n---\n\nat the top of the file.`
      )
      throw new Error("Please see the error from the console above.")
    }

    return (
      <div className="bg-white text-gray-500 antialiased js-focus-visible">
        <ToastContainer />
        <SearchModal
          ref={element => (this.searchModal = element)}
          algoliaIndex="docs"
        />
        <Navbar
          app={"Docs"}
          homeUrl={"/docs/"}
          includeSearch={true}
          onSearchClick={event => {
            event.preventDefault()
            this.searchModal.setVisible(true)
          }}
        />
        <ContentsSidebarLeft
          location={pathname}
          isMobileMenuOpen={this.state.isMobileMenuOpen}
          openMobileMenu={this.openMobileMenu}
          closeMobileMenu={this.closeMobileMenu}
          CurrentIconImported={CurrentIconImported}
          currentTitle={currentTitle}
          domains={domains}
          currentChapters={currentChapters}
          currentPathBeingViewed={pathname}
        />
        <ActionSidebarRight fileAbsolutePath={fileAbsolutePath} />
        <main
          className={
            (this.state.isMobileMenuOpen ? "hidden " : "") +
            "min-w-screen min-h-screen"
          }
        >
          <div className="container mt-1 px-9 mx-auto flex items-center justify-center">
            <div className="mt-20 xl:mt-0">
              <div
                className="container content xl:max-w-xl 2xl:max-w-3xl"
                dangerouslySetInnerHTML={{ __html: html }}
              />
              <DocFooterNavigation
                previousPage={previousPage}
                nextPage={nextPage}
              />
            </div>
          </div>
        </main>
        <footer className="my-10 flex flex-col items-center justify-center">
          <div>
            © {new Date().getFullYear()} St. Jude Children's Research Hospital
          </div>
          <div>
            Questions?{" "}
            <a href="mailto:support@stjude.cloud">support@stjude.cloud</a>
          </div>
        </footer>
      </div>
    )
  }
}

export default BaseLayout

export const pageQuery = graphql`
  query($slug: String!) {
    configYaml {
      id
      domains {
        title
        modules {
          icon
          path
          title
          subtitle
          chapters {
            title
            pages {
              title
              path
            }
          }
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fileAbsolutePath
      frontmatter {
        title
      }
    }
  }
`

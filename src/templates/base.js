/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "../components/navbar"
import ContentsSidebarLeft from "../components/contentsbar"
import DetailsSidebarRight from "../components/detailsbar"

const BaseLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="bg-white text-gray-500 antialiased js-focus-visible">
      <Navbar />
      <ContentsSidebarLeft />
      <DetailsSidebarRight />
      <main className="min-w-screen min-h-screen">{children}</main>
      <footer>
        © {new Date().getFullYear()}, St. Jude Children's Research Hospital
      </footer>
    </div>
  )
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BaseLayout

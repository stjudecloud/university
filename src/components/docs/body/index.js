import React from "react"
import PropTypes from "prop-types"

const DocsBody = ({ html }) => {
  return <div id="docs-body" dangerouslySetInnerHTML={{ __html: html }} />
}

DocsBody.propTypes = {
  html: PropTypes.string.isRequired,
}

DocsBody.defaultProps = {
  html: null,
}

export default DocsBody

import React from "react"
import FooterButton from "./FooterButton"
import PageHistory from "./PageHistory"
import PropTypes from "prop-types"

const DocsFooter = ({ previousPage, nextPage, commits }) => {
  return (
    <div id="docs-footer">
      <div id="docs-footer-nav">
        <FooterButton page={previousPage} forward={false} />
        <div style={{ flex: "1" }}></div>
        <FooterButton page={nextPage} forward={true} />
      </div>
      <div>{commits && <PageHistory commits={commits} />}</div>
    </div>
  )
}

DocsFooter.propTypes = {
  previousPage: PropTypes.any,
  nextPage: PropTypes.any,
  commits: PropTypes.any,
}

DocsFooter.propTypes = {
  previousPage: null,
  nextPage: null,
  commits: [],
}

export default DocsFooter

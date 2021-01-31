import React from "react"
import { Link } from "gatsby"
import FooterButton from "./FooterButton"

const DocFooterNavigation = ({ previousPage = null, nextPage = null }) => {
  return (
    <div className="mt-8 flex flex-col md:flex-row justify-between">
      <FooterButton page={previousPage} forward={false} />
      <div style={{ flex: "1" }}></div>
      <FooterButton page={nextPage} forward={true} />
    </div>
  )
}

export default DocFooterNavigation

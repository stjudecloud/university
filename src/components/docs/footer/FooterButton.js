import React from "react"
import { Link } from "gatsby"
import Chevron from "../../../images/icons/chevron.svg"
import PropTypes from "prop-types"

const FooterButton = ({ page, forward, flexSize }) => {
  if (page === null) {
    return <div style={{ flex: flexSize }} />
  }

  return (
    <Link to={page.path} className="footer-button" style={{ flex: flexSize }}>
      <div
        className="flex justify-between items-center w-full h-full text-black"
        style={{ color: "inherit" }}
      >
        {!forward && (
          <Chevron
            style={{ transform: "rotate(180deg)", color: "inherit" }}
            className="flex-0 fill-current"
            width="16px"
            height="16px"
          />
        )}
        <div
          className={`flex flex-col justify-end flex-1 ${
            forward ? "text-left" : "text-right"
          }`}
        >
          <span className="text-gray-400 text-sm whitespace-nowrap">
            {page.chapter}
          </span>
          <span>{page.title}</span>
        </div>
        {forward && (
          <Chevron
            className="flex-0 ml-2 fill-current text-inherit"
            width="16px"
            height="16px"
          />
        )}
      </div>
    </Link>
  )
}

FooterButton.propTypes = {
  page: PropTypes.any.isRequired,
  forward: PropTypes.bool,
  flexSize: PropTypes.number,
}

FooterButton.defaultProps = {
  page: null,
  forward: true,
  flexSize: 5,
}

export default FooterButton

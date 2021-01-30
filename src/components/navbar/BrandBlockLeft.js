import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import ChildLogo from "../../images/icons/stjudecloud-child-logo.svg"

const BrandBlockLeft = ({ app, homeUrl }) => {
  return (
    <div className="flex flex-1 items-center justify-left">
      <Link
        className="flex items-center cursor-pointer"
        to="https://stjude.cloud"
      >
        <ChildLogo
          className="fill-current text-white border-white border-r"
          height="40"
          width="61"
        />
      </Link>
      <Link className="whitespace-nowrap" to="https://stjude.cloud">
        <span
          className="hidden md:inline-block text-white"
          style={{ paddingLeft: "10px", fontWeight: "800", fontSize: "20px" }}
        >
          St. Jude Cloud
        </span>
      </Link>
      {app && (
        <Link className="whitespace-nowrap" to={homeUrl}>
          <span
            className="text-white text-opacity-60"
            style={{ paddingLeft: "8px", fontSize: "20px" }}
          >
            {app}
          </span>
        </Link>
      )}
    </div>
  )
}

BrandBlockLeft.propTypes = {
  app: PropTypes.string.isRequired,
  homeUrl: PropTypes.string.isRequired,
}

export default BrandBlockLeft

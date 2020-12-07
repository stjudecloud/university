import React from "react"
import ChildLogo from "../../icons/stjudecloud-logo.svg"
import { Link } from "gatsby"

const BrandBlockLeft = ({ app }) => {
  return (
    <div className="flex flex-1 items-center justify-left">
      <a
        href="https://stjude.cloud"
        className="flex items-center cursor-pointer"
      >
        <ChildLogo
          className="fill-current text-navy border-navy border-r"
          height="40"
          width="61"
        />
      </a>
      <Link className="whitespace-nowrap" to="/">
        <span
          className="hidden md:inline-block text-navy"
          style={{ paddingLeft: "10px", fontWeight: "800", fontSize: "20px" }}
        >
          St. Jude Cloud
        </span>
        {app && (
          <span
            className="text-navy text-opacity-60"
            style={{ paddingLeft: "8px", fontSize: "20px" }}
          >
            {app}
          </span>
        )}
      </Link>
    </div>
  )
}

export default BrandBlockLeft

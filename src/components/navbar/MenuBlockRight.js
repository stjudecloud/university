import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import Menu from "../../images/icons/menu.svg"
import { PropTypes } from "prop-types"

const MenuBlockRight = ({ enableGitHub = true, enableMenu = false }) => {
  return (
    <div className="flex flex-1 items-center justify-end">
      <div
        className="flex items-center justify-center text-navy fill-current"
        height="40px"
        width="40px"
        style={{ marginRight: "10px" }}
      >
        {enableGitHub && (
          <a
            href="https://github.com/stjudecloud/university"
            className="text-black cursor-pointer"
            style={{ paddingRight: "10px" }}
          >
            <FontAwesomeIcon
              icon={faGithub}
              style={{ width: "35px", height: "35px" }}
            />
          </a>
        )}
      </div>
      {enableMenu && (
        <div
          className="flex items-center justify-center text-navy fill-current"
          height="40px"
          width="40px"
          style={{ marginRight: "10px" }}
        >
          <Menu width="20px" height="20px" />
        </div>
      )}
    </div>
  )
}

MenuBlockRight.propTypes = {
  enableGitHub: PropTypes.bool,
  enableMenu: PropTypes.bool,
}

export default MenuBlockRight

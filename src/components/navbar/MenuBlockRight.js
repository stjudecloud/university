import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import Menu from "../../images/icons/menu.svg"
import { PropTypes } from "prop-types"
import { Link } from "gatsby"

const MenuBlockRight = ({ enableGitHub = true, enableMenu = false }) => {
  const docsVersion = process.env.GATSBY_DOCS_VERSION

  return (
    <div className="flex flex-1 items-center justify-end">
      <div
        className="flex items-center justify-center text-white fill-current"
        height="40px"
        width="40px"
        style={{ marginRight: "10px" }}
      >
        {enableGitHub && (
          <div className="flex items-between">
            <a
              href="https://github.com/stjudecloud/university"
              className="text-white cursor-pointer"
              style={{ paddingRight: "10px" }}
            >
              <FontAwesomeIcon
                icon={faGithub}
                style={{ width: "35px", height: "35px" }}
                className="hover:opacity-80"
              />
              {docsVersion && (
                <div className="flex items-center text-xs font-bold mt-0.5 hover:opacity-80">
                  <Link
                    to={`https://github.com/stjudecloud/university/releases/tag/${docsVersion}`}
                  >
                    {docsVersion}
                  </Link>
                </div>
              )}
            </a>
          </div>
        )}
      </div>
      {enableMenu && (
        <div
          className="flex items-center justify-center text-white fill-current"
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

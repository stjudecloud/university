import React, { useState } from "react"
import { Link } from "gatsby"
import Chevron from "../../../../images/icons/chevron.svg"
import ModulePopUp from "../ModulePopUp"
import MenuIcon from "../../../../images/icons/menu.svg"
import CloseIcon from "../../../../images/icons/close.svg"
import ContentsMenu from "./content-menu"
import { PropTypes } from "prop-types"

/**
 *
 *
 * @param {*} props
 * @return {*}
 */
const ContentsSidebarLeft = props => {
  const {
    isMobileMenuOpen,
    openMobileMenu,
    closeMobileMenu,
    currentIconImported,
    currentTitle,
    domains,
    currentChapters,
    currentPathBeingViewed,
  } = props
  const [isModuleSelectorMousedOver, setIsModuleSelectorMousedOver] = useState(
    false
  )

  return (
    <div>
      <ModulePopUp
        show={isModuleSelectorMousedOver}
        domains={domains}
        isMobileMenuShown={isMobileMenuOpen}
      />
      <div
        className="fixed top-20 left-6 rounded-full bg-white border border-coolGray-300 p-4 shadow-lg cursor-pointer z-20"
        onClick={openMobileMenu}
        show={!isMobileMenuOpen}
      >
        <MenuIcon
          width="24"
          height="24"
          className="fill-current text-coolGray-500"
        />
      </div>
      <ContentsMenu
        closeMobileMenu={closeMobileMenu}
        currentIconImported={currentIconImported}
        currentTitle={currentTitle}
        currentChapters={currentChapters}
        currentPathBeingViewed={currentPathBeingViewed}
        setIsModuleSelectorMousedOver={setIsModuleSelectorMousedOver}
      />
    </div>
  )
}

ContentsSidebarLeft.propTypes = {
  /**
   * Boolean holding whether the mobile menu is currently open.
   */
  isMobileMenuOpen: PropTypes.bool,
  /**
   * Function that sets the mobile menu to open in a higher
   * component's state.
   */
  openMobileMenu: PropTypes.func,
  /**
   * Function that sets the mobile menu to close in a higher
   * component's state.
   */
  closeMobileMenu: PropTypes.func,
  /**
   * Icon imported from an SVG.
   */
  currentIconImported: PropTypes.node,
  /**
   * Title of the currently rendered guide.
   */
  currentTitle: PropTypes.string.isRequired,
  /**
   * Set of domains to render in the pop-up menu.
   */
  domains: PropTypes.array,
  /**
   * Chapters in the current module.
   */
  currentChapters: PropTypes.array,
  /**
   * Current path being viewed.
   */
  currentPathBeingViewed: PropTypes.string,
}

ContentsSidebarLeft.defaultProps = {
  isMobileMenuOpen: false,
  openMobileMenu: null,
  closeMobileMenu: null,
  currentIconImported: null,
  currentTitle: null,
  domains: [],
  currentChapters: [],
  currentPathBeingViewed: null,
}

export default ContentsSidebarLeft

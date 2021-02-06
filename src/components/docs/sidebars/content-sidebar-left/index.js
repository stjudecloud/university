import React, { useState } from "react"
import { Link } from "gatsby"
import ModulePopUp from "./modules-popup-menu"
import MenuIcon from "../../../../images/icons/menu.svg"
import ContentsMenu from "./content-menu"
import { PropTypes } from "prop-types"

/**
 *
 *
 * @param {*} props
 * @return {*}
 */
const ContentsSidebarLeft = ({
  isMobileMenuOpen,
  openMobileMenu,
  closeMobileMenu,
  currentIconImported,
  currentTitle,
  domains,
  currentChapters,
  currentPathBeingViewed,
}) => {
  const [isModuleSelectorMousedOver, setIsModuleSelectorMousedOver] = useState(
    false
  )

  return (
    <>
      <ModulePopUp
        show={isModuleSelectorMousedOver}
        isMobileMenuShown={isMobileMenuOpen}
        domains={domains}
      />
      <div
        className="visible xl:invisible fixed top-20 left-6 rounded-full bg-white border border-coolGray-300 p-4 shadow-lg cursor-pointer z-20"
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
        CurrentIconImported={currentIconImported}
        currentTitle={currentTitle}
        currentChapters={currentChapters}
        currentPathBeingViewed={currentPathBeingViewed}
        setIsModuleSelectorMousedOver={setIsModuleSelectorMousedOver}
      />
    </>
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

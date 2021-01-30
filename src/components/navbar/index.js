import React from "react"
import BrandBlockLeft from "./BrandBlockLeft"
import SearchBlock from "./SearchBlock"
import MenuBlockRight from "./MenuBlockRight"
import { PropTypes } from "prop-types"

const Navbar = ({
  app = null,
  homeUrl = null,
  includeSearch = false,
  onSearchClick = null,
}) => (
  <nav
    className="sticky top-0 z-40 bg-secondary border-b shadow-sm border-solid border-coolGray-100 flex items-center justify-between w-full p-2 leading-4"
    style={{ height: "65px" }}
  >
    <BrandBlockLeft app={app} homeUrl={homeUrl} />
    {includeSearch && <SearchBlock onSearchClick={onSearchClick} />}
    <MenuBlockRight />
  </nav>
)

Navbar.propTypes = {
  app: PropTypes.string.isRequired,
  homeUrl: PropTypes.string.isRequired,
  includeSearch: PropTypes.bool,
  onSearchClick: PropTypes.func,
}

export default Navbar

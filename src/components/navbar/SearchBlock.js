import React from "react"
import SearchIcon from "../../icons/search.svg"
import CommandSymbol from "../../icons/cmd.svg"
import PropTypes from "prop-types"

const SearchBlock = ({ onSearchClick = null }) => {
  return (
    <span
      className="hidden md:flex md:flex-1 justify-center items-center cursor-pointer"
      onClick={onSearchClick}
      role="button"
      tabIndex={0}
      onKeyDown={onSearchClick}
    >
      <SearchIcon className="fill-current text-coolGray-400" />
      <span className="flex lg:hidden text-coolGray-400 text-xl ml-4 select-none">
        Search
      </span>
      <div className="hidden lg:flex text-coolGray-400 text-lg select-none">
        <span className="ml-4">
          Search for anything <span className="hidden xl:inline">quickly</span>
        </span>
        <span className="mx-4 text-coolGray-400 border border-coolGray-400 border-solid rounded px-2 py-0.5 flex items-center justify-between">
          <CommandSymbol
            className="fill-current select-none"
            style={{ width: "14px", height: "14px" }}
          />
          <span className="ml-0.5 text-large select-none">K</span>
        </span>
      </div>
    </span>
  )
}

SearchBlock.propTypes = {
  onSearchClick: PropTypes.func.isRequired,
}

export default SearchBlock

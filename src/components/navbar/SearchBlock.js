import React from "react"
import SearchIcon from "../../images/icons/search.svg"
import CommandSymbol from "../../images/icons/cmd.svg"
import PropTypes from "prop-types"

const SearchBlock = ({ onSearchClick = null }) => {
  return (
    <div
      onClick={onSearchClick}
      role="button"
      tabIndex={0}
      onKeyDown={onSearchClick}
    >
      <div
        style={{ height: "40px", minWidth: "200px" }}
        className="bg-white rounded-full hidden md:flex md:flex-1 justify-center items-center cursor-pointer px-8"
      >
        <SearchIcon
          className="fill-current text-gray-400"
          style={{ height: "22px", width: "22px" }}
        />
        <span className="flex items-center lg:hidden text-gray-400 text-lg ml-4 select-none">
          Search
        </span>
        <div className="hidden items-center lg:flex text-gray-400 text-lg select-none">
          <span className="ml-4">
            Search for anything{" "}
            <span className="hidden xl:inline">quickly</span>
          </span>
          <span className="ml-4 text-gray-400 border border-gray-400 border-solid rounded px-2 py-0.5 flex items-center justify-between">
            <CommandSymbol
              className="text-gray-400 fill-current select-none"
              style={{ width: "12px", height: "12px" }}
            />
            <span className="ml-0.5 text-sm select-none">K</span>
          </span>
        </div>
      </div>
    </div>
  )
}

SearchBlock.propTypes = {
  onSearchClick: PropTypes.func.isRequired,
}

export default SearchBlock

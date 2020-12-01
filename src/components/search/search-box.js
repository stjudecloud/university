import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import SearchIcon from "../../icons/search.svg"

export default connectSearchBox(({ refine, currentRefinement, onFocus }) => (
  <form className="flex items-center justify-start py-4 px-12 border-b-2 border-coolGray-100">
    <SearchIcon className="mr-4" />
    <input
      className="text-black text-lg w-full focus:outline-none"
      type="text"
      placeholder="Search"
      aria-label="Search"
      onChange={e => refine(e.target.value)}
      value={currentRefinement}
      onFocus={onFocus}
    />
  </form>
))

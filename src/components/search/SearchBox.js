import React, { Component } from "react"
import PropTypes from "prop-types"
import SearchIcon from "../../icons/search.svg"
import { connectSearchBox } from "react-instantsearch-dom"
import { translatable } from "react-instantsearch-core"

class SearchBox extends Component {
  static propTypes = {
    currentRefinement: PropTypes.string,
    className: PropTypes.string,
    refine: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired,
    inputRef: PropTypes.func,
  }

  static defaultProps = {
    currentRefinement: "",
    className: "",
  }

  onInputMount = input => {
    this.input = input
    if (!this.props.inputRef) return
    this.props.inputRef(input)
  }

  render() {
    const { currentRefinement, translate, onFocus, refine } = this.props

    return (
      <form className="flex items-center justify-start py-4 px-12 border-b-2 border-coolGray-100">
        <SearchIcon className="mr-4" />
        <input
          ref={this.onInputMount}
          className="text-black text-lg w-full focus:outline-none"
          type="text"
          placeholder={translate("placeholder")}
          aria-label="Search"
          onChange={e => refine(e.target.value)}
          value={currentRefinement}
          onFocus={onFocus}
        />
      </form>
    )
  }
}

export default connectSearchBox(
  translatable({
    placeholder: "Search…",
  })(SearchBox)
)

import algoliasearch from "algoliasearch/lite"
import React, { Component } from "react"
import { InstantSearch } from "react-instantsearch-dom"
import SearchBox from "./search-box"
import SearchResult from "./search-result"
import { GlobalHotKeys } from "react-hotkeys"

export default class SearchModal extends Component {
  constructor(props) {
    super(props)

    let { indices } = props
    this.state = {
      query: "",
      hasFocus: false,
      isVisible: false,
      indices: indices,
    }

    this.searchClient = algoliasearch(
      "FYWCTC64T5",
      "30e7df733efd7992d36f211e19a210f6"
    )
  }

  componentDidUpdate() {
    this.textFieldInput.focus()
  }

  setQuery(query) {
    this.setState({ query: query })
  }

  setFocus(focus) {
    this.setState({ hasFocus: focus })
  }

  setVisible(visibility) {
    this.setState({ isVisible: visibility })
  }

  toggleVisible = () => {
    this.setVisible(!this.state.isVisible)
  }

  handleClickOutside = e => {
    if (this.modal.contains(e.target)) {
      // Click was inside of modal
      return
    }

    this.setVisible(false)
  }

  keyMap = {
    SEARCH: "cmd+k",
  }

  handlers = {
    SEARCH: e => {
      e.preventDefault()
      this.toggleVisible()
    },
  }

  render() {
    let { isVisible, indices, hasFocus, query } = this.state

    return (
      <div
        id="search-backdrop"
        ref={element => (this.background = element)}
        onClick={this.handleClickOutside}
        style={{ backdropFilter: "blur(4px)" }}
        className={
          (isVisible ? "" : "invisible ") +
          "z-50 fixed inset-0 bg-gray-800 bg-opacity-80"
        }
      >
        <GlobalHotKeys keyMap={this.keyMap} handlers={this.handlers} />
        <div className="flex container mx-auto v-full mt-20 justify-center">
          <div
            ref={element => (this.modal = element)}
            className="flex flex-col w-320 sm:w-480 lg:w-640 rounded-lg bg-white "
          >
            <InstantSearch
              searchClient={this.searchClient}
              indexName={indices[0].name}
              onSearchStateChange={({ query }) => this.setQuery(query)}
            >
              <SearchBox
                inputRef={element => (this.textFieldInput = element)}
                onFocus={() => this.setFocus(true)}
                hasFocus={hasFocus}
              />
              <SearchResult
                show={query && query.length > 0 && hasFocus}
                indices={indices}
              />
            </InstantSearch>
          </div>
        </div>
      </div>
    )
  }
}

{
  /* <SearchBox
                ref={element => (this.searchBox = element)}
                onFocus={() => this.setFocus(true)}
                hasFocus={hasFocus}
              /> */
}

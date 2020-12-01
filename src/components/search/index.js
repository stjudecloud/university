import algoliasearch from "algoliasearch/lite"
import { createRef, default as React, useState } from "react"
import { InstantSearch } from "react-instantsearch-dom"
import SearchBox from "./search-box"
import SearchResult from "./search-result"
import { GlobalHotKeys } from "react-hotkeys"

const keyMap = {
  SEARCH: "cmd+k",
}

export default function SearchModal({ indices }) {
  const rootRef = createRef()
  const [query, setQuery] = useState()
  const [hasFocus, setFocus] = useState(false)
  const [isVisible, setVisible] = useState(false)
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  )

  const toggleVisible = () => {
    setVisible(v => !v)
  }

  const handlers = {
    SEARCH: event => toggleVisible(),
  }

  return (
    <div
      id="search-backdrop"
      style={{ backdropFilter: "blur(4px)" }}
      className={
        (isVisible ? "" : "invisible ") +
        "z-50 fixed inset-0 bg-gray-800 bg-opacity-80"
      }
    >
      <GlobalHotKeys keyMap={keyMap} handlers={handlers} />
      <div className="flex container mx-auto v-full mt-20 justify-center">
        <div className="flex flex-col w-320 sm:w-480 lg:w-640 rounded-lg bg-white ">
          <InstantSearch
            searchClient={searchClient}
            indexName={indices[0].name}
            onSearchStateChange={({ query }) => setQuery(query)}
          >
            <SearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} />
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

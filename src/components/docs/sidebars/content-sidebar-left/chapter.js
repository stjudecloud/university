import React, { useState } from "react"
import { Link } from "gatsby"
import Chevron from "../../../../images/icons/chevron.svg"

function renderPages(pages, currentPathBeingViewed) {
  let renderedPages = []
  let isCurrentPathInChapter = false

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i]
    if (page.path === currentPathBeingViewed) {
      isCurrentPathInChapter = true
    }

    renderedPages.push(
      <li
        key={page.path}
        className={
          (currentPathBeingViewed === page.path ? "active " : "") + "page"
        }
      >
        <Link to={page.path}>{page.title}</Link>
      </li>
    )
  }
  return { renderedPages, isCurrentPathInChapter }
}

const ChapterMenuItem = ({
  chapter: { title, pages, collapsable },
  currentPathBeingViewed,
}) => {
  const { renderedPages, isCurrentPathInChapter } = renderPages(
    pages,
    currentPathBeingViewed
  )
  const [isCollapsableMenuOpen, setIsCollapsableMenuOpen] = useState(
    isCurrentPathInChapter
  )

  return (
    <ul className="chapter" key={title}>
      <li
        className={`title${collapsable ? " cursor-pointer" : ""}`}
        onClick={() => {
          setIsCollapsableMenuOpen(!isCollapsableMenuOpen)
        }}
      >
        {title}
        {collapsable && (
          <Chevron
            className="collapsable-menu-chevron"
            height="12"
            width="12"
            style={isCollapsableMenuOpen ? { rotate: "90deg" } : null}
          />
        )}
      </li>
      {(!collapsable || isCollapsableMenuOpen) && renderedPages}
    </ul>
  )
}

export default ChapterMenuItem

import React, { useState } from "react"
import { Link } from "gatsby"

/**
 * A utility class which parses the book's representation
 * stored in GraphQL and creates and object which can be
 * used to render the pages in the book.
 *
 */
export default class StJudeCloudDocs {
  constructor(config, allChapters, currentChapter) {
    this.unorderedChapters = {}
    this.hierarchicalChapters = []
    this.flattenedChapters = []

    this.loadUnorderedChapters(allChapters)
    this.assembleChapters(config)
    this.loadCurrentChapter(currentChapter)
  }

  /**
   * Parses the bookConfig object fed in from GraphQL into
   * a native representation that this object can work with.
   *
   * @param currentChapter
   */
  assembleChapters(bookConfig) {
    const { tracks } = bookConfig

    for (let i = 0; i < tracks.length; i++) {
      let currentTrack = tracks[i]

      if (!(currentTrack in this.unorderedChapters)) {
        throw new Error(`Expected track was not found: ${tracks[i]}!`)
      }

      let currentTracksChapters = this.unorderedChapters[tracks[i]]
      this.flattenedChapters.push(...currentTracksChapters)
      let indexChapter = currentTracksChapters.filter(e => e.index === true)
      if (indexChapter.length !== 1) {
        throw new Error(
          `Expected a single chapter marked as index for "${currentTrack}".`
        )
      }

      let nonIndexChapters = currentTracksChapters.filter(e => e.index !== true)

      this.hierarchicalChapters.push({
        track: tracks[i],
        index: indexChapter[0],
        chapters: nonIndexChapters,
      })
    }

    console.log(this.flattenedChapters)
  }

  loadUnorderedChapters(allChapters) {
    allChapters.nodes.map(node => {
      const {
        frontmatter: { title, track, index },
        fields: { slug },
        timeToRead,
      } = node

      // new track discovered
      if (!(track in this.unorderedChapters)) {
        this.unorderedChapters[track] = []
      }

      this.unorderedChapters[track].push({
        title,
        track,
        index,
        slug,
        timeToRead,
      })
    })
  }

  /**
   * Parses the currentChapter object fed in from GraphQL into
   * a native representation that this object can work with.
   *
   * @param currentChapter
   */
  loadCurrentChapter(currentChapter) {
    const {
      frontmatter: { title, track },
      html,
      timeToRead,
      parent,
    } = currentChapter

    this.current = {
      title,
      track,
      html,
      timeToRead,
      parent,
    }
  }

  getCurrentIndexInFlattenedChapters() {
    for (let i = 0; i < this.flattenedChapters.length; i++) {
      if (
        this.flattenedChapters[i].title === this.current.title &&
        this.flattenedChapters[i].track === this.current.track
      ) {
        return i
      }
    }

    return -1
  }

  previousChapter() {
    let currentIndex = this.getCurrentIndexInFlattenedChapters()
    if (currentIndex > 0) {
      return this.flattenedChapters[currentIndex - 1]
    }

    return null
  }

  nextChapter() {
    let currentIndex = this.getCurrentIndexInFlattenedChapters()
    if (currentIndex < this.flattenedChapters.length) {
      return this.flattenedChapters[currentIndex + 1]
    }

    return null
  }

  renderSidebar() {
    const [active, setActive] = useState(false)

    return this.hierarchicalChapters.map(track => {
      return (
        <div>
          <div className="link-container">
            <Link
              to={track.index.slug}
              onClick={() => setActive(!active)}
              active={false}
            >
              {track.track}
            </Link>
          </div>
          <ul className="subtopic">
            {track.chapters.map(chapter => (
              <li key={chapter.slug}>
                <Link
                  to={chapter.slug}
                  active={false}
                  onClick={() => setActive(!active)}
                >
                  {chapter.title}{" "}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )
    })
  }
}

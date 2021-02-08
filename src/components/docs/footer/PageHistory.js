import React, { useState } from "react"
import moment from "moment"
import { PropTypes } from "prop-types"
import Chevron from "../../../images/icons/chevron.svg"

/**
 * Grabs the first line in the commit message.
 * @param {string} commitMessage the commit message to parse.
 */
function parseCommitMessageHeaderLine(commitMessage) {
  return commitMessage.split("\n")[0]
}

/**
 * Returns an appropriate span for formatting the contributors section
 * of the <li/>.
 * @param commit the commit object to build an element for.
 */
function elementForContributors(commit, avatarHeight = 30, avatarWidth = 30) {
  return (
    <span
      className="flex"
      style={{
        width: avatarWidth * 2 + "px",
        minWidth: avatarWidth * 2 + "px",
      }}
    >
      <a target="_blank" rel="noopener noreferrer" href={commit.author.url}>
        <img
          className="rounded-full m-0"
          src={commit.author.avatar_url}
          title={commit.author.login}
          width={avatarWidth + "px"}
          height={avatarHeight + "px"}
          style={{
            margin: "0px",
          }}
        />
      </a>
      {commit.author.login !== commit.committer.login && (
        <a
          style={{
            transform: "translateX(-" + Math.floor(avatarWidth / 2) + "px)",
          }}
          target="_blank"
          rel="noopener noreferrer"
          href={commit.committer.url}
        >
          <img
            className="rounded-full m-0"
            src={commit.committer.avatar_url}
            title={commit.committer.login}
            width={avatarWidth + "px"}
            height={avatarHeight + "px"}
            style={{
              margin: "0px",
            }}
          />
        </a>
      )}
    </span>
  )
}

/**
 * Returns a full, rendered element for a given commit object.
 * @param commit the commit object to build an element for.
 */
function elementForCommit(commit) {
  return (
    <li key={commit.url} className="flex items-center">
      {elementForContributors(commit)}
      <span className="text-sm">
        <a target="_blank" rel="noopener noreferrer" href={commit.url}>
          {parseCommitMessageHeaderLine(commit.message)}
        </a>
      </span>
      <span className="flex-1" />
      <span className="text-sm" style={{ width: "110px", minWidth: "110px" }}>
        {moment().to(moment(commit.date))}
      </span>
    </li>
  )
}

const PageHistory = ({ commits, commitsToShow: rawCommitsToShow }) => {
  const commitsToShow = Math.min(rawCommitsToShow, commits.length)
  const [startingIndex, setStartingIndex] = useState(0)
  let renderedCommits = []

  for (let i = startingIndex; i < startingIndex + commitsToShow; i++) {
    const commit = commits[i]
    if (!commit) continue
    renderedCommits.push(elementForCommit(commit))
  }
  return (
    <div>
      <h4 id="page-history">
        <span>Page History</span>
        {` `}
        <button
          className="border p-1 rounded-sm border-gray-900 hover:bg-gray-900 hover:text-white"
          onClick={() => {
            setStartingIndex(Math.max(startingIndex - commitsToShow, 0))
          }}
        >
          <Chevron
            className="fill-current"
            height="12px"
            width="12px"
            style={{ transform: "rotate(180deg)" }}
          />
        </button>
        {` `}
        <button
          className="border p-1 rounded-sm border-gray-900 hover:bg-gray-900 hover:text-white"
          onClick={() => {
            setStartingIndex(
              Math.min(
                startingIndex + commitsToShow,
                commits.length - commitsToShow
              )
            )
          }}
        >
          <Chevron className="fill-current" height="12px" width="12px" />
        </button>
        {` `}
        <span className="text-sm text-gray-500 italic">
          {startingIndex + 1}-{startingIndex + commitsToShow} of{" "}
          {commits.length} results
        </span>
      </h4>
      <ul>{renderedCommits}</ul>
    </div>
  )
}

PageHistory.propTypes = {
  commits: PropTypes.any.isRequired,
  commitsToShow: PropTypes.number,
}

PageHistory.defaultProps = {
  commits: [],
  commitsToShow: 5,
}

export default PageHistory

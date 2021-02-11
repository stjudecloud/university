import React from "react"
import moment from "moment"
import ContributorsBlock from "./contributors"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const DocsHeader = ({ title, timeToRead, contributors, commits }) => {
  let latestCommit = null
  let latestCommitDate = null

  if (commits) {
    for (let i = 0; i < commits.length; i++) {
      const commit = commits[i]
      if (!commit.date) continue
      const currentCommitDate = moment(commit.date)
      if (!latestCommit || latestCommitDate < currentCommitDate) {
        latestCommit = commit
        latestCommitDate = currentCommitDate
      }
    }
  }

  return (
    <div id="docs-header" className="content mt-20 xl:mt-16 mb-8">
      <h1 style={{ marginBottom: "5px" }}>{title}</h1>
      <span className="italic">
        {latestCommit && (
          <>
            {" "}
            Last updated: {moment(latestCommitDate).fromNow()} (
            <Link to="#page-history">view history</Link>)
          </>
        )}
        <>
          {latestCommit && <>{`, `}</>} Time to read: {timeToRead} mins
        </>
      </span>
      {contributors && <ContributorsBlock contributors={contributors} />}
    </div>
  )
}

DocsHeader.propTypes = {
  title: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  contributors: PropTypes.any,
  commits: PropTypes.any,
}

DocsHeader.defaultProps = {
  title: null,
  contributors: [],
  timeToRead: -1,
  commits: [],
}

export default DocsHeader

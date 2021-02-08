import React, { useState } from "react"
import { Link } from "gatsby"
import moment from "moment"

function parseCommitMessageHeaderLine(commitMessage) {
  return commitMessage.split("\n")[0]
}

const DocsBody = ({ html, commits, toShow = 3 }) => {
  const [startingIndex, setStartingIndex] = useState(0)
  let results = []
  for (let i = startingIndex; i < startingIndex + toShow; i++) {
    const e = commits[i]
    results.push(
      <tr key={e.url} className="items-center">
        <td className="flex">
          <a target="_blank" rel="noopener noreferrer" href={e.author.url}>
            <img
              className="rounded-full m-0"
              src={e.author.avatar_url}
              title={e.author.login}
              width="30"
              height="30"
              style={{
                margin: "0px",
              }}
            />
          </a>
          {e.author.login !== e.committer.login && (
            <a
              style={{ marginLeft: "-10px" }}
              target="_blank"
              rel="noopener noreferrer"
              href={e.committer.url}
            >
              <img
                className="rounded-full m-0"
                src={e.committer.avatar_url}
                title={e.committer.login}
                width="30"
                height="30"
                style={{
                  margin: "0px",
                }}
              />
            </a>
          )}
        </td>
        <td>
          <a target="_blank" rel="noopener noreferrer" href={e.url}>
            {parseCommitMessageHeaderLine(e.message)}
          </a>
        </td>
        <td>{moment().to(moment(e.date))}</td>
      </tr>
    )
  }

  return (
    <div className="container content xl:max-w-xl 2xl:max-w-3xl">
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <h2>Page History</h2>
      <table>
        <thead>
          <tr>
            <th>Contributors</th>
            <th>Message</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{results}</tbody>
      </table>
    </div>
  )
}

export default DocsBody

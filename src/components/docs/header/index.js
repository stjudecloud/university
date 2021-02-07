import React from "react"
import ContributorsBlock from "./contributors"

const DocsHeader = ({ title, contributors, timeToRead }) => {
  return (
    <div className="content mt-20 xl:mt-16 mb-8">
      <h1 style={{ marginBottom: "5px" }}>{title}</h1>
      <div style={{ marginBottom: "15px" }}>
        <i>Time to Read: {timeToRead} mins</i>
      </div>
      <ContributorsBlock contributors={contributors} />
    </div>
  )
}

export default DocsHeader

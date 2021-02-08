import React from "react"

const ContributorsBlock = ({ contributors }) => {
  return (
    <div className="flex">
      {contributors.map(e => (
        <a
          key={e.login}
          alt={`Avatar for ${e.login}`}
          title={e.login}
          href={e.profile_url}
        >
          <img
            src={e.avatar_url}
            className="mx-0.5 rounded-full border-2 border-solid border-secondary cursor-pointer"
            height="40"
            width="40"
            style={{ marginTop: "0px", marginBottom: "0px" }}
          />
        </a>
      ))}
    </div>
  )
}

export default ContributorsBlock

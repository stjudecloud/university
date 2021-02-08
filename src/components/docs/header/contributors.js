import React from "react"
import { PropTypes } from "prop-types"

const ContributorsBlock = ({ contributors }) => {
  return (
    <div className="flex">
      {contributors.map(e => (
        <a
          key={e.login}
          alt={`Avatar for ${e.login}`}
          title={e.login}
          href={e.url}
          target="_blank"
          rel="noopener noreferrer"
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

ContributorsBlock.propTypes = {
  contributors: PropTypes.any.isRequired,
}

ContributorsBlock.defaultProps = {
  contributors: [],
}

export default ContributorsBlock

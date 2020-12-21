import React from "react"
import PropTypes from "prop-types"
import Question from "../../../images/icons/question.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

function askAQuestion() {
  let mailto = "mailto:support@stjude.cloud"
  mailto += "?subject=Question about St. Jude Cloud docs"
  mailto +=
    "&body=Hello%2C%0A%0AI%27ve%20got%20a%20question%20about%20the%20St.%20Jude%20Cloud%20docs.Specifically,%20this%20page%0A%0A%20%20%20%20%20%20"
  mailto += encodeURI(window.location)
  mailto += "%0A%0A%5BYOUR%20QUESTION%20HERE%5D.%0A%0AThanks%21"
  window.location.href = mailto
}

function editOnGitHub(fileAbsolutePath) {
  const token = "/docs/"
  if (!fileAbsolutePath.includes(token)) {
    throw new Error(`File path not in docs?`)
  }

  const position = fileAbsolutePath.indexOf(token) + token.length
  const relativeFilePath = fileAbsolutePath.substring(position)
  return function () {
    let url =
      "https://github.com/stjudecloud/university/edit/master/docs/" +
      relativeFilePath
    window.open(url)
  }
}

const ActionSidebarRight = ({ fileAbsolutePath }) => {
  return (
    <div className="z-30 fixed right-0 w-96 pt-9 px-7 invisible xl:visible">
      <div className="flex flex-col items-center justify-center">
        <div className="uppercase w-full text-center text-coolGray-400 pb-4">
          Actions
        </div>
        <button
          className="flex justify-center w-3/5 rounded bg-coolGray-800 text-white font-semibold px-4 py-2 my-2"
          onClick={askAQuestion}
        >
          <Question className="mr-2" />
          <span>Ask a Question</span>
        </button>
        <button
          className="flex justify-center w-3/5 rounded bg-coolGray-800 text-white font-semibold px-4 py-2 my-2"
          onClick={editOnGitHub(fileAbsolutePath)}
        >
          <FontAwesomeIcon
            className="fill-current mr-2"
            icon={faGithub}
            style={{ width: "27px", height: "27px" }}
          />
          <span>Edit on GitHub</span>
        </button>
      </div>
    </div>
  )
}

ActionSidebarRight.propTypes = {
  fileAbsolutePath: PropTypes.node.isRequired,
}

export default ActionSidebarRight

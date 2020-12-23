import React from "react"
import PropTypes from "prop-types"
import Question from "../../../images/icons/question.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { toast } from "react-toastify"

function askAQuestion() {
  if (window.Intercom) {
    window.Intercom("showNewMessage")
  } else {
    toast.error(
      "Looks like our chat isn't enabled in this environment! Please email us at support@stjude.cloud with this error.",
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    )
  }
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
          className="flex justify-center w-3/5 rounded bg-coolGray-800 text-white font-semibold px-4 py-2 my-2 disabled:opacity-50"
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

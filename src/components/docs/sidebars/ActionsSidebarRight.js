import React from "react"
import PropTypes from "prop-types"
import Question from "../../../images/icons/question.svg"
import Tour from "../../../images/icons/tour.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { toast } from "react-toastify"
import Button from "../../buttons/Button"

function callIntercom(action, args = null) {
  if (window && window.Intercom) {
    window.Intercom(action, args)
  } else {
    toast.error(
      "Looks like Intercom isn't enabled in this environment! Please email us at support@stjude.cloud with this error so we can fix it!",
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

function askAQuestion() {
  callIntercom("showNewMessage")
}

function playTour() {
  callIntercom("startTour", 203573)
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
        <Button
          className="leading-8"
          style={{ backgroundColor: "#1874DC" }}
          hoveredStyle={{ backgroundColor: "#549cec" }}
          onClick={askAQuestion}
        >
          <Question className="mx-2 leading-8" />
          Ask a Question
        </Button>

        <Button
          className="leading-8"
          style={{ backgroundColor: "#1874DC" }}
          hoveredStyle={{ backgroundColor: "#549cec" }}
          onClick={playTour}
        >
          <Tour className="mx-2 leading-8" style={{ fill: "white" }} />
          Start the Tour
        </Button>

        <Button
          className="leading-8"
          style={{ backgroundColor: "#444444" }}
          hoveredStyle={{ backgroundColor: "#2b2b2b" }}
          onClick={editOnGitHub(fileAbsolutePath)}
        >
          <FontAwesomeIcon
            className="fill-current mx-2 leading-8"
            icon={faGithub}
            style={{ width: "27px", height: "27px" }}
          />
          Edit on GitHub
        </Button>
      </div>
    </div>
  )
}

ActionSidebarRight.propTypes = {
  fileAbsolutePath: PropTypes.node.isRequired,
}

export default ActionSidebarRight

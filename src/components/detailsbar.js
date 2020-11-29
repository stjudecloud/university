import React from "react"
import Question from "../icons/question.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const DetailsSidebarRight = () => (
  <div className="z-40 fixed right-0 w-96 pt-9 px-7 invisible xl:visible">
    <div className="flex flex-col items-center justify-center">
      <div className="uppercase w-full text-center text-coolGray-400 pb-4">
        Actions
      </div>
      <button className="flex justify-center w-3/5 rounded bg-coolGray-800 text-white font-semibold px-4 py-2 my-2">
        <Question className="mr-2" />
        <span>Ask a Question</span>
      </button>
      <button className="flex justify-center w-3/5 rounded bg-coolGray-800 text-white font-semibold px-4 py-2 my-2">
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

export default DetailsSidebarRight

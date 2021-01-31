import React from "react"
import { Link } from "gatsby"
import Chevron from "../../../images/icons/chevron.svg"

const FooterButton = ({ page, forward = true, flexSize = 5 }) => {
  if (page === null) {
    return <div style={{ flex: flexSize }} />
  }

  return (
    <Link
      to={page.path}
      className="flex items-center border border-coolGray-200 rounded-full hover:border-secondary text-black hover:text-secondary py-4 px-8 shadow-xl mb-6 md:mb-0 transition duration-300"
      style={{ flex: flexSize }}
    >
      <div className="flex justify-between items-center w-full h-full">
        {!forward && (
          <Chevron
            style={{ transform: "rotate(180deg)" }}
            className="flex-0 fill-current text-inherit"
            width="16px"
            height="16px"
          />
        )}
        <div
          className={`flex flex-col justify-end flex-1 ${
            forward ? "text-left" : "text-right"
          }`}
        >
          <span className="text-gray-400 text-sm whitespace-nowrap">
            {page.chapter}
          </span>
          <span className="text-inherit">{page.title}</span>
        </div>
        {forward && (
          <Chevron
            className="flex-0 ml-2 fill-current text-inherit"
            width="16px"
            height="16px"
          />
        )}
      </div>
    </Link>
  )
}

export default FooterButton

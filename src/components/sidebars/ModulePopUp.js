import React, { useState } from "react"
import { Link } from "gatsby"
import { Transition } from "@headlessui/react"

const ModulePopUp = ({ show, modules }) => {
  const [isInPopup, setIsInPopup] = useState(false)

  return (
    <div
      className="absolute inset-0"
      style={{ transform: "translate(100%)" }}
      onMouseEnter={() => {
        setIsInPopup(true)
      }}
      onMouseLeave={() => setIsInPopup(false)}
    >
      <Transition
        className="m-4 p-2 border border-coolGray-100 rounded-lg bg-white w-full whitespace-nowrap shadow-md"
        show={isInPopup || show}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="flex flex-col w-full h-full">
          {modules.map(module => {
            const { icon, path, title } = module
            const IconImported = require("../../icons/" + icon)
            return (
              <Link
                key={path}
                to={path}
                className="flex justify-left items-center px-4 py-2 hover:bg-coolGray-100"
              >
                <IconImported width="40" height="40" className="mr-4" />
                <div>{title}</div>
              </Link>
            )
          })}
        </div>
      </Transition>
    </div>
  )
}

export default ModulePopUp

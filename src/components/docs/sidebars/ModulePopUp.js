import React, { useState } from "react"
import { Link } from "gatsby"
import { Transition } from "@headlessui/react"

const ModulePopUp = ({ show, modules, isMobileMenuShown }) => {
  const [isInPopup, setIsInPopup] = useState(false)

  return (
    <div
      className="absolute inset-x-0 top-0 z-50"
      style={!isMobileMenuShown ? { transform: "translate(100%)" } : {}}
      role="button"
      tabIndex={0}
      onMouseEnter={() => {
        if (show) setIsInPopup(true)
      }}
      onMouseLeave={() => setIsInPopup(false)}
    >
      <Transition
        className="m-4 p-2 border border-coolGray-100 rounded-lg bg-white whitespace-nowrap shadow-md"
        style={
          isMobileMenuShown
            ? {
                width: "90%",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "10px",
              }
            : { width: "100%" }
        }
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
            const IconImported = require("../../../icons/" + icon)
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

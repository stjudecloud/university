import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import SearchIcon from "../icons/search.svg"
import CommandSymbol from "../icons/cmd.svg"

const Navbar = () => (
  <nav className="sticky top-0 z-40 h-20 lg:z-50 bg-white border-b shadow-sm border-solid border-coolGray-100 flex items-center justify-between w-full px-7">
    <a
      href="https://stjude.cloud"
      className="flex flex-1 justify-left items-center cursor-pointer"
    >
      <FontAwesomeIcon
        className="fill-current text-navy"
        icon={faArrowCircleLeft}
        style={{ width: "24px", height: "24px" }}
      />
      <span
        className="m-2 font-bold font-sans text-navy select-none"
        style={{ fontSize: "21px" }}
      >
        stjude.cloud
      </span>
    </a>
    <span className="hidden md:flex flex-1 justify-center items-center">
      <SearchIcon className="fill-current text-coolGray-400" />
      <span className="flex lg:hidden text-coolGray-400 text-xl ml-4 select-none">
        Search
      </span>
      <div className="hidden lg:flex text-coolGray-400 text-lg select-none">
        <span className="ml-4">
          Search for anything <span className="hidden xl:inline">quickly</span>
        </span>
        <span className="mx-4 text-coolGray-400 border border-coolGray-400 border-solid rounded px-2 py-0.5 flex items-center justify-between">
          <CommandSymbol
            className="fill-current select-none"
            style={{ width: "14px", height: "14px" }}
          />
          <span className="ml-0.5 text-large select-none">K</span>
        </span>
      </div>
    </span>
    <a
      href="https://github.com/stjudecloud/docs"
      className="flex flex-1 items-center justify-end text-coolGray-400 cursor-pointer"
    >
      <FontAwesomeIcon
        className="fill-current"
        icon={faGithub}
        style={{ width: "40px", height: "40px" }}
      />
    </a>
  </nav>
)

export default Navbar

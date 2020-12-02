import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import ChildLogo from "../icons/stjudecloud-logo.svg"
import SearchIcon from "../icons/search.svg"
import CommandSymbol from "../icons/cmd.svg"
import Menu from "../icons/menu.svg"

const Navbar = ({ onSearchClick }) => (
  <nav
    className="sticky top-0 z-40 bg-white border-b shadow-sm border-solid border-coolGray-100 flex items-center justify-between w-full p-2 leading-4"
    style={{ height: "65px" }}
  >
    <div className="flex flex-1 items-center justify-left ">
      <a
        href="https://stjude.cloud"
        className="flex items-center cursor-pointer"
      >
        <ChildLogo
          className="fill-current text-navy border-navy border-r"
          style={{ height: 40, width: 61 }}
        />
      </a>
      <a href="/">
        <span
          className="text-navy"
          style={{ paddingLeft: "10px", fontWeight: "800", fontSize: "20px" }}
        >
          St. Jude Cloud
        </span>
        <span
          className="text-navy text-opacity-60"
          style={{ paddingLeft: "8px", fontSize: "20px" }}
        >
          Docs
        </span>
      </a>
    </div>
    <span
      className="hidden md:flex flex-1 justify-center items-center cursor-pointer"
      onClick={onSearchClick}
      onFocus={event => {
        event.preventDefault()
      }}
    >
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
    <div className="flex flex-1 items-center justify-end">
      <div
        className="flex items-center justify-center text-navy fill-current"
        style={{ height: "40px", width: "40px", marginRight: "10px" }}
      >
        <a
          href="https://github.com/stjudecloud/docs"
          className="text-navy cursor-pointer"
          style={{ paddingRight: "10px" }}
        >
          <FontAwesomeIcon
            icon={faGithub}
            style={{ width: "35px", height: "35px" }}
          />
        </a>
      </div>
      {/* <div
        className="flex items-center justify-center text-navy fill-current"
        style={{ height: "40px", width: "40px", marginRight: "10px" }}
      >
        <Menu style={{ width: "20px", height: "20px" }} />
      </div> */}
    </div>
  </nav>
)

export default Navbar

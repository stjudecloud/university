import React, { useState } from "react"
import { ScrollContainer } from "gatsby-react-router-scroll"
import { StaticQuery, graphql, Link } from "gatsby"
import { globalHistory } from "@reach/router"
import Chevron from "../../icons/chevron.svg"
import GenomicsPlatformLogo from "../../icons/stjudecloud-genomics-platform-logo.svg"
import ModulePopUp from "./ModulePopUp"

const ContentsSidebarLeft = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <StaticQuery
      query={graphql`
        query ModulesQuery {
          configYaml {
            id
            modules {
              icon
              path
              title
              chapters {
                title
                pages {
                  title
                  path
                }
              }
            }
          }
        }
      `}
      render={data => {
        const {
          configYaml: { modules },
        } = data
        const currentPathBeingViewed = globalHistory.location.pathname
        let currentModule = null

        for (let i = 0; i < modules.length; i++) {
          if (currentPathBeingViewed.startsWith(modules[i].path)) {
            currentModule = modules[i]
            break
          }
        }

        if (!currentModule) {
          throw new Error(
            `Could not find current module for page: ${currentPathBeingViewed}.`
          )
        }

        const {
          icon: currentIcon,
          title: currentTitle,
          chapters: currentChapters,
        } = currentModule
        const CurrentIconImported = require("../../icons/" + currentIcon)

        return (
          <div className="invisible xl:visible z-30 contents-sidebar fixed w-1/5 bg-coolGray-50 min-h-screen border-r border-coolGray-100 border-solid ">
            <div className="absolute inset-0">
              <div
                id="module"
                className="h-28"
                onMouseEnter={() => {
                  setIsOpen(true)
                }}
                onMouseLeave={() => setIsOpen(false)}
              >
                <div className="flex w-full items-center justify-center bg-coolGray-100 hover:bg-coolGray-200 h-28 px-4 cursor-pointer">
                  <div className="w-full flex items-center justify-center">
                    <CurrentIconImported
                      className="mr-2"
                      width="48px"
                      height="48px"
                    />
                    <span
                      className="font-semibold text-coolGray-700"
                      style={{ fontSize: "18px" }}
                    >
                      {currentTitle}
                    </span>
                    <Chevron
                      style={{ transform: [{ rotate: "90deg" }] }}
                      className="ml-2 fill-current text-coolGray-500"
                      width="16px"
                      height="16px"
                    />
                  </div>
                  <ModulePopUp show={isOpen} modules={modules} />
                </div>
              </div>
              <ScrollContainer key="content-sidebar">
                <div className="my-5 ml-7 mr-3 pb-28 overflow-x-visible overflow-y-auto">
                  {currentChapters.map(e => {
                    return (
                      <ul className="chapter">
                        <li className="title">{e.title}</li>
                        {e.pages.map(page => {
                          return (
                            <li
                              className={
                                currentPathBeingViewed === page.path
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link to={page.path}>{page.title}</Link>
                            </li>
                          )
                        })}
                      </ul>
                    )
                  })}
                </div>
              </ScrollContainer>
            </div>
          </div>
        )
      }}
    />
  )
}

export default ContentsSidebarLeft

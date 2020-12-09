import React, { useState } from "react"
import { ScrollContainer } from "gatsby-react-router-scroll"
import { StaticQuery, graphql, Link } from "gatsby"
import Chevron from "../../../icons/chevron.svg"
import ModulePopUp from "./ModulePopUp"

const ContentsSidebarLeft = ({ location: currentPathBeingViewed }) => {
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
        const CurrentIconImported = require("../../../icons/" + currentIcon)

        return (
          <div className="invisible xl:visible z-30 contents-sidebar fixed w-1/5 bg-coolGray-50 min-h-screen border-r border-coolGray-100 border-solid ">
            <div className="absolute inset-0">
              <div
                id="module"
                className="h-28"
                role="link"
                tabIndex={0}
                onMouseEnter={() => {
                  setIsOpen(true)
                }}
                onMouseLeave={() => setIsOpen(false)}
              >
                <div className="flex w-full items-center justify-center bg-coolGray-100 hover:bg-coolGray-200 h-28 px-4 cursor-pointer border-b border-coolGray-200">
                  <div className="w-full flex items-center justify-center">
                    <CurrentIconImported
                      className="mr-2"
                      width="40px"
                      height="40px"
                    />
                    <span
                      className="font-semibold text-coolGray-700 whitespace-nowrap"
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
              <div className="absolute inset-x-0">
                <div className="h-screen overflow-y-scroll">
                  <ScrollContainer key="content-sidebar">
                    <div className="my-2 mx-3 pb-28">
                      {currentChapters.map(e => {
                        return (
                          <ul className="chapter">
                            <li className="title">{e.title}</li>
                            {e.pages.map(page => {
                              return (
                                <li
                                  className={
                                    (currentPathBeingViewed === page.path
                                      ? "active "
                                      : "") + "page"
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
            </div>
          </div>
        )
      }}
    />
  )
}

export default ContentsSidebarLeft

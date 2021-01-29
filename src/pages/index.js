import React from "react"
import { Link, graphql, useStaticQuery, navigate } from "gatsby"
import DocsLogo from "../images/icons/docs-logo.svg"
import Chevron from "../images/icons/chevron.svg"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

const redirectToDocs = true

const HomePage = () => {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        atomic: file(relativePath: { eq: "atomic-structure@2x.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        bgOvalOne: file(relativePath: { eq: "bg-oval-one@2x.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        bgOvalTwo: file(relativePath: { eq: "bg-oval-two@2x.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        bgOvalThree: file(relativePath: { eq: "bg-oval-three@2x.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        logo: file(relativePath: { eq: "icons/stjudecloud-full-logo@2x.png" }) {
          childImageSharp {
            fixed(width: 231, height: 45) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  const fluidImages = [
    data.atomic.childImageSharp.fluid,
    data.bgOvalOne.childImageSharp.fluid,
    data.bgOvalTwo.childImageSharp.fluid,
    data.bgOvalThree.childImageSharp.fluid,
  ]

  const logo = data.logo.childImageSharp.fixed

  if (redirectToDocs) {
    navigate('/docs/')
    return null
  } else {
    return (
      <BackgroundImage
        className="absolute h-screen w-screen bg-auto bg-right"
        fluid={fluidImages}
        style={{
          backgroundPosition: [
            "center right",
            "top right",
            "10% 0%",
            "0% 100%",
          ],
          backgroundSize: ["auto 90%", "auto 50%", "35% auto", "auto 50%"],
        }}
      >
        <Img
          fixed={logo}
          className="absolute select-none"
          style={{ top: 25, left: 25, width: "231px", height: "45px" }}
        />
        <div
          className="flex items-center h-screen w-screen"
          style={{
            padding: "0rem 0rem 0rem 10%",
          }}
        >
          <div className="mb-20">
            <div className="mb-20 select-none">
              <h1 className="text-5xl font-bold">St. Jude Cloud</h1>
              <h1 className="mt-6 text-purple text-6xl font-bold">
                University
              </h1>
              <p className="mt-10 text-coolGray-500 text-xl">
                Explore the comprehensive <br />
                education playbook for using <br />
                St. Jude Cloud.
              </p>
            </div>

            <div>
              <Link
                to="/docs/"
                className="flex flex-row justify-between w-full cursor-pointer border-2 hover:border-purple text-black hover:text-purple transition duration-200 call-to-action-btn"
              >
                <div className="flex items-center">
                  <DocsLogo width="130px" />
                </div>
                <div className="mx-4 flex flex-col justify-center text-inherit select-none">
                  <h5 className="text-2xl font-semibold text-inherit mb-2">
                    View the Docs
                  </h5>
                  <p className="text-coolGray-500 text-md">
                    Read the technical documentation for the St. Jude Cloud
                    project.
                  </p>
                </div>
                <div className="flex items-center">
                  <Chevron
                    className="text-inherit fill-current"
                    width="20px"
                    height="20px"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </BackgroundImage>
    )
  }
}

export default HomePage

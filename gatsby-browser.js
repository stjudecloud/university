/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "./src/styles/global.scss"

export function onRouteUpdate({ location }) {
  return anchorScroll(location)
}

export function shouldUpdateScroll() {
  return true
}

function anchorScroll(location, timeout = 250, offsetY = 65 + 10) {
  if (location && location.hash) {
    setTimeout(() => {
      const item = document.querySelector(location.hash).offsetTop
      window.scrollTo({
        top: item - offsetY,
        left: 0,
        behavior: "smooth",
      })
    }, timeout)
  }

  return true
}

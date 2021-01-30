import React from "react"
import classNames from "classnames"
import { PropTypes } from "prop-types"

const defaultClasses = [
  "w-3/5",
  "flex",
  "justify-center",
  "items-center",
  "rounded-full",
  // "bg-coolGray-800",
  "text-white",
  "font-semibold",
  "px-4",
  "py-2",
  "my-2",
  "disabled:opacity-50",
  "bg-black",
]

const Button = ({ className = null, children = null, ...props }) => {
  const classes = classNames(defaultClasses, className)
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  props: PropTypes.any,
}

export default Button

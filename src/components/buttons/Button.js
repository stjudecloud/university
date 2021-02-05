import React, { useState } from "react"
import classNames from "classnames"
import { PropTypes } from "prop-types"

const defaultClasses = [
  "w-3/5",
  "flex",
  "justify-left",
  "items-center",
  "rounded-full",
  "text-white",
  "font-semibold",
  "px-4",
  "py-2",
  "my-2",
  "disabled:opacity-50",
  "bg-black",
]

const Button = ({ className, children, style, hoveredStyle, ...props }) => {
  const classes = classNames(defaultClasses, className)
  const [hover, setHover] = useState(false)
  return (
    <button
      className={classes}
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
      style={{
        ...style,
        ...(hover ? hoveredStyle : null),
      }}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  style: PropTypes.any,
  hoveredStyle: PropTypes.any,
  props: PropTypes.any,
}

Button.defaultProps = {
  className: null,
  children: null,
  style: null,
  hoveredStyle: null,
  props: null,
}

export default Button

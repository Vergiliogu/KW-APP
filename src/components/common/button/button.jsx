import React from 'react'
import PropTypes from 'prop-types'

import styles from "./button.styles.sass"

/**
 * @param {Node} children Node that represents button's children.
 * @param {Array} classes Classes to add to button.
*/

const Button = ({ children, classes = [], ...rest }) => {
  return (
    <button
      className={`${styles.button} ${classes.join(" ")}`}
      {...rest}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.arrayOf(PropTypes.string)
}

export default Button

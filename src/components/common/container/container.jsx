import React from 'react'
import PropTypes from 'prop-types'

import styles from "./container.styles.sass"

/**
 * @param {Node} Node that represents container's children.
*/
const Container = ({ children }) => {
  return (
    <div id={styles.containerBlock}>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired
}

export default Container;
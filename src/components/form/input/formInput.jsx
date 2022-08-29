import React from 'react'
import PropTypes from 'prop-types'

import styles from "./formInput.styles.sass"

const messageTypes = {
  "success": styles.successMessage,
  "warning": styles.warningMessage,
  "danger": styles.dangerMessage,
}

/**
 * @param {String}   name     Name of the Input.
 * @param {String}   type     Type of the Input.
 * @param {Object}   message  Message Object to show bellow the Input. Ex: {text: "alert", type: "warning"}.
 * @param {Array}    classes  Classes to add to input.
*/

const FormInput = ({ name, type, classes = [], message, ...rest }) => {
  return (
    <div className={styles.inputBlock}>
      <input
        type={type}
        name={name}
        id={name + "-id"}
        className={`${styles.input} ${classes.join(" ")}`}
        {...rest}
      />
      <div className={styles.messageBlock}>
        {message && <p className={`${styles.inputMessage} ${messageTypes[message.type] || ""}`}>
          {message.text}
        </p>}
      </div>
    </div>
  )
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  message: PropTypes.object,
  classes: PropTypes.arrayOf(PropTypes.string)
}

export default FormInput
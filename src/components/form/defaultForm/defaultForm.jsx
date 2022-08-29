import React, { useState } from 'react'
import { sanitizeInputsText } from "@utils/sanitization"
import { isEmailValid, areAllFieldsValid } from "@utils/validityCheck"
import * as operations from "@services/operations"
import defaultErrorMessages from "@constants/errorMessages.json"
import PropTypes from "prop-types"

import FormInput from '../input/'
// import styles from "./defaultForm.styles.sass"

/**
 * @param {Function}  onFormSubmit  Submit callback function.
 * @param {Node}      submitButton  Node of the submit button.
 * @param {String}    action        String representing the action to take on handleSubmit.
 * @param {Object}    defaultValues Default values used to fill the inputs.
*/

const DefaultForm = (props) => {
  const {
    onFormSubmit,
    submitButton: SubmitButton,
    action = "save",
    defaultValues = {}
  } = props

  const [username, setUsername] = useState(defaultValues.username || "")
  const [email, setEmail] = useState(defaultValues.email || "")
  const [originalEmail] = useState(defaultValues.email || "")
  const [errors, setErrors] = useState({})

  const handleTyping = (e, setValueFunc, sanitizeFunc = null) => {
    let value = e.target.value
    if (sanitizeFunc)
      value = sanitizeFunc(value)

    setValueFunc(value)
    setErrors(prev => ({...prev, [e.target.name.replace("form-", "")]: null}))
  }

  const isUsernameValid = (username) => {
    const words = username.trim().split(" ")
    const isValid = words.length >= 2
    return { isValid, errorMessage: defaultErrorMessages.username.notValid }
  }

  const isSubmitValid = () => {
    const fieldsToValidate = [
      { fieldName: "username", validationFunc: isUsernameValid, value: username },
      { fieldName: "email", validationFunc: isEmailValid, value: email }
    ]
    const response = areAllFieldsValid(fieldsToValidate)

    return response
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { areAllValid, errors } = isSubmitValid()
    if (areAllValid) {
      const user = {
        username: username.trim(),
        email
      }

      let response = { success: false }
      switch (action) {
        case "save":
          response = operations.saveUser(user)
          break
        case "edit":
          response = operations.editUser(originalEmail, user)
          break
      }

      if(response.success) {
        setErrors({})
        onFormSubmit(response.user)
      } else
        setErrors(response.message)
    } else
      setErrors(errors)
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        name={"form-username"}
        type={"text"}
        value={username}
        onChange={(e) => handleTyping(e, setUsername, sanitizeInputsText)}
        placeholder={"Nome de usuário"}
        message={errors.username ? { text: errors.username, type: "danger" } : null}
      />
      <FormInput
        name={"form-email"}
        type={"email"}
        value={email}
        onChange={(e) => handleTyping(e, setEmail)}
        placeholder={"Email"}
        message={errors.email ? { text: errors.email, type: "danger" } : null}
      />
      <SubmitButton />
    </form>
  )
}

DefaultForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  submitButton: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  action: PropTypes.string,
  defaultValues: PropTypes.object
}

export default DefaultForm
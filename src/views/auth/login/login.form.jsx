import React, { useState } from 'react';
import { getUserByAccessLink } from '@services/operations';
import PropTypes from "prop-types"

import FormInput from '@components/form/input/'
import Button from "@components/common/button/"
import styles from "./login.styles.sass"

const LoginForm = ({ onFormSubmit }) => {
  const [accessLink, setAccessLink] = useState("")
  const [errors, setErrors] = useState({})

  const handleTyping = (e, setValueFunc) => {
    setValueFunc(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const response = getUserByAccessLink(accessLink)

    if (response.success)
      onFormSubmit(response.user)
    else
      setErrors({ accessLink: response.message })
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        name={"login-access-link"}
        type={"text"}
        value={accessLink}
        onChange={(e) => handleTyping(e, setAccessLink)}
        placeholder={"Link de acesso"}
        message={errors.accessLink ? { text: errors.accessLink, type: "danger" } : null}
      />
      <Button classes={[styles.loginButton]}>
        Entrar
      </Button>
    </form>
  )
}

LoginForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired
}

export default LoginForm;
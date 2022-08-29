import React, { useContext } from 'react'
import UserContext from '@contexts/user'
import PropTypes from "prop-types"

import Button from "@components/common/button/"
import styles from "./login.styles.sass"

const LoginSuccess = ({ userLink }) => {
  const { onToggleIsLogged } = useContext(UserContext)
  return (
    <>
      <p className={styles.successMessage}>
        Link de acesso confirmado! Guarde o link de uso unico que aparece
        abaixo para ter acesso uma próxima vez.
      </p>
      <p className={[styles.successMessage, styles.link].join(" ")}>{userLink}</p>
      <Button classes={[styles.loginButton]} onClick={onToggleIsLogged}>
        Acessar sistema
      </Button>
    </>
  )
}

LoginSuccess.propTypes = {
  userLink: PropTypes.string.isRequired
}

export default LoginSuccess;
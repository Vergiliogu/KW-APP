import React, { useContext } from 'react'
import UserContext from '@contexts/user'
import PropTypes from "prop-types"

import Button from "@components/common/button/"
import styles from "./register.styles.sass"

const RegisterSuccess = ({ userLink }) => {
  const { onToggleIsLogged } = useContext(UserContext)

  return (
    <>
      <p className={styles.successMessage}>
        Cadastro efetuado! Guarde o link de uso unico que aparece
        abaixo para ter acesso uma próxima vez.
      </p>
      <p className={[styles.successMessage, styles.link].join(" ")}>{userLink}</p>
      <Button onClick={onToggleIsLogged}>
        Acessar sistema
      </Button>
    </>
  )
}

RegisterSuccess.propTypes = {
  userLink: PropTypes.string.isRequired
}

export default RegisterSuccess
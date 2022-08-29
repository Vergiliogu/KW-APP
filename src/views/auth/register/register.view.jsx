import React, { useState, useContext } from 'react'
import UserContext from '@contexts/user'

import DefaultForm from '@components/form/defaultForm'
import RegisterSuccess from './register.success'
import Button from "@components/common/button/"
import styles from "./register.styles.sass"
import authStyles from "../auth.styles.sass"

const Register = () => {
  const { user, onUpdateUser } = useContext(UserContext)
  const [successMode, setSuccessMode] = useState(false)

  const handleFormSubmit = (newUser) => {
    if (newUser) {
      onUpdateUser(newUser)
      setSuccessMode(true)
    } else
      console.log("Register View Error: NewUser Data is not valid")
  }

  return (
    <div id={styles.registerBlock}>
      <p className={authStyles.title}>Cadastro</p>
      {successMode ? (
        <RegisterSuccess userLink={user.accessLink} />
      ) : (
        <DefaultForm onFormSubmit={handleFormSubmit} submitButton={() => <Button>Cadastrar</Button>} />
      )}
    </div>
  )
}

export default Register
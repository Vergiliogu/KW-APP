import React, { useState, useContext } from 'react'
import UserContext from '@contexts/user'

import LoginForm from "./login.form"
import LoginSuccess from './login.success'
import styles from "./login.styles.sass"
import authStyles from "../auth.styles.sass"

const Login = () => {
  const { user, onUpdateUser } = useContext(UserContext)
  const [successMode, setSuccessMode] = useState(false)

  const handleFormSubmit = (newUser) => {
    if (newUser) {
      onUpdateUser(newUser)
      setSuccessMode(true)
    }
  }

  return (
    <div id={styles.loginBlock}>
      <p className={authStyles.title}>Login</p>
      {successMode ? (
        <LoginSuccess userLink={user.accessLink} />
      ) : (
        <LoginForm onFormSubmit={handleFormSubmit} />
      )}
    </div>
  )
}

export default Login
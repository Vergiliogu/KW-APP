import React from 'react'

import Container from '@components/common/container/'
import Register from "./register"
import Login from "./login"
import styles from "./auth.styles.sass"

const Auth = (props) => {
  return (
    <Container>
      <div id={styles.authBlock}>
        <div className={styles.authFormBlock}>
          <Register />
        </div>
        <div className={styles.horizontalLine} />
        <div className={styles.authFormBlock}>
          <Login />
        </div>
      </div>
    </Container>
  )
}

export default Auth
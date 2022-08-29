import React from 'react'

import HomeForm from './form'
import Container from '@components/common/container/'
import styles from "./home.styles.sass"

const Home = () => {
  return (
    <Container>
      <div id={styles.homeBlock}>
        <HomeForm />
      </div>
    </Container>
  )
}

export default Home
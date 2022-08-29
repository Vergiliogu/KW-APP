import React, { useState } from 'react'
import UserContext from '@contexts/user'
import "./App.sass"

import Auth from "./views/auth"
import Home from "./views/home"

const App = () => {
  const [user, setUser] = useState({})
  const [isLogged, setIsLogged] = useState(false)

  const handleUpdateUser = (newUser) => {
    setUser(newUser)
  }

  const handleToggleIsLogged = () => {
    setIsLogged(!isLogged)
  }

  const userContextPayload = {
    isLogged,
    user,
    onUpdateUser: handleUpdateUser,
    onToggleIsLogged: handleToggleIsLogged
  }

  return (
    <UserContext.Provider value={userContextPayload}>
      {!isLogged ?
        <Auth /> :
        <Home />
      }
    </UserContext.Provider>
  )
}

export default App
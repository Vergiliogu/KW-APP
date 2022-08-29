import React, { useContext } from 'react'
import userContext from '@contexts/user'
import * as operations from "@services/operations"

import DefaultForm from '@components/form/defaultForm'
import Button from "@components/common/button"
import styles from "./home.styles.sass"

const HomeForm = () => {
  const { user, onUpdateUser, onToggleIsLogged } = useContext(userContext)

  const handleDelete = () => {
    operations.deleteUser(user.email)
    onUpdateUser({})
    onToggleIsLogged()
    window.alert("Usuário excluído com sucesso!")
  }

  const handleFormSubmit = (userData) => {
    window.alert("Usuário editado com sucesso!")
  }

  return (
    <>
      <DefaultForm
        onFormSubmit={handleFormSubmit}
        defaultValues={user}
        action={"edit"}
        submitButton={() => (
          <div className={styles.buttonContainer}>
            <Button>
              Salvar edições
            </Button>
          </div>
        )} />
      <Button onClick={handleDelete}>
        Excluir usuário
      </Button>
    </>
  )
}

export default HomeForm
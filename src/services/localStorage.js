const usersLocalName = "@users"

export const saveData = (newData) => {
  localStorage.setItem(
    usersLocalName,
    typeof newData === "object" ? JSON.stringify(newData) : newData
  )
}

export const getData = () => {
  const users = JSON.parse(localStorage.getItem(usersLocalName) || "[]")
  return users
}
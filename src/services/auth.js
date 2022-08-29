import { v4 } from "uuid"
import { saveData, getData } from "./localStorage"

export const generateAccessLink = () => {
  return v4()
}

export const replaceAccessLink = (userIndex, newAccessLink) => {
  const allUsers = getData()
  allUsers[userIndex].accessLink = newAccessLink
  saveData(allUsers)
}

export const assignNewAccessLink = (userIndex) => {
  const newAccessLink = generateAccessLink()
  replaceAccessLink(userIndex, newAccessLink)
}

export const doesEmailAlreadyExists = (email) => {
  const allUsers = getData()
  return typeof allUsers.find(user => user.email === email) !== "undefined"
}
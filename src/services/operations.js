import { saveData, getData } from "./localStorage"
import { generateAccessLink, doesEmailAlreadyExists, assignNewAccessLink } from "./auth"
import defaultErrorMessages from "@constants/errorMessages.json"

export const getUserByEmail = (userEmail) => {
  const allUsers = getData()
  const currentUser = allUsers.find(user => user.email === userEmail)
  return currentUser
}

export const getUserByAccessLink = (accessLink) => {
  const currentUserIndex = getUserIndex("accessLink", accessLink)
  if (currentUserIndex === -1)
    return { success: false, user: null, message: defaultErrorMessages.accessLink.notValid }

  assignNewAccessLink(currentUserIndex)

  const allUsers = getData()
  const currentUser = allUsers[currentUserIndex]
  return { success: true, user: currentUser, message: null }
}

/**
 * @param {String} key   Name of the key that should be used to search for the user.
 * @param {Any}    value Value that will be used as a comparison at the time of the search.
*/
const getUserIndex = (key, value) => {
  const allUsers = getData()
  const currentUserIndex = allUsers.findIndex(user => user[key] === value)
  return currentUserIndex
}

/**
 * @param {Object} newUser User data. Ex: {username: "test test", email: "test@test.ts"}.
*/
export const saveUser = (newUser) => {
  if (!doesEmailAlreadyExists(newUser.email)) {
    const allUsers = getData()
    newUser.accessLink = generateAccessLink()
    allUsers.push(newUser)

    saveData(allUsers)
    return { success: true, user: newUser, message: null }
  }

  return { success: false, user: null, message: { email: defaultErrorMessages.email.alreadyExists } }
}

/**
 * @param {String} originalUserEmail  User's original email before any changes.
 * @param {Object} newUser            User data. Ex: {username: "test test", email: "test@test.ts"}.
*/
export const editUser = (originalUserEmail, newUser) => {
  if (originalUserEmail === newUser.email || !doesEmailAlreadyExists(newUser.email)) {
    const allUsers = getData()
    const currentUserIndex = allUsers.findIndex(user => user.email === originalUserEmail)
    allUsers[currentUserIndex] = {...allUsers[currentUserIndex], ...newUser}
    saveData(allUsers)
    return { success: true, user: newUser, message: null }
  }

  return { success: false, user: null, message: { email: defaultErrorMessages.email.alreadyExists } }
}

export const deleteUser = (userEmail) => {
  const allUsers = getData()
  const currentUserIndex = allUsers.findIndex(user => user.email === userEmail)
  allUsers.splice(currentUserIndex, 1)
  saveData(allUsers)
}

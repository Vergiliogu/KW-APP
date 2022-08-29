import defaultErrorMessages from "@constants/errorMessages.json"

/**
  * @param {Array} fieldsToValidate Array of Objects with fieldName, validationFunc and value to be tested
  * Ex: [{fieldName: "fieldName", validationFunc: () => {}, value: "test" }].
 */
export const areAllFieldsValid = (fieldsToValidate) => {
  const errors = {}
  let areAllValid = true

  for (const { fieldName, validationFunc, value } of fieldsToValidate) {
    const { isValid, errorMessage } = validationFunc(value)
    if (!isValid) {
      errors[fieldName] = errorMessage
      areAllValid = false
    }
  }

  return { areAllValid, errors }
}

export const isEmailValid = (email) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const isValid = emailRegex.test(email)
  return { isValid, errorMessage: defaultErrorMessages.email.notValid }
}
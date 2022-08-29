const regexPatterns = {
  "letters": /[A-Za-zÀ-ÖØ-öø-ÿ ]+/g,
}

export const sanitizeInputsText = (text, type = "letters") => {
  const sanitizedText = text.match(regexPatterns[type])
  return sanitizedText ? sanitizedText[0] : ""
}
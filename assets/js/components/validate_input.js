import { setWarning } from "./active_warning.js";
import { removeInvalidCharacter } from "./remove_invalid_character.js";

/**
 * Validate the input
 * If the input is invalid, execute the methods "setWarning" and "removeInvalidCharacter"
 * @param {textarea} element 
 */

export const validateInput = (element) => {
  const regExp = new RegExp(/[A-Z]|\d|\W/)

  if (element.value !== null && element.value.match(regExp)) {
      setWarning()
      removeInvalidCharacter(element)
  }
}
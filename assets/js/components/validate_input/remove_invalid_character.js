/**
 * Only remove the specified character that match RegEx from the input field
 * @param {textarea} $input 
 */

export const removeInvalidCharacter = ($input) => {
  $input.value = $input.value.replaceAll(/[A-Z]|\d|\W/g, "");
}
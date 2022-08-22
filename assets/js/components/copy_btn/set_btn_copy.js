import  { generateCopyButton} from "./generate_copy_btn.js"

/**
 * Set the copy button when encode or decode text
 * @param {outputElementClassName} outputClass 
 */
export const setCopyButton = (outputClass) => {
  const $output = document.querySelector(outputClass)
  const $btnCopy = generateCopyButton()

  $output.appendChild($btnCopy)
}
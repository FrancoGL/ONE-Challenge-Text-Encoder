import { createPElement } from "./generate_p_element.js";
import { setCopyButton } from "../copy_btn/set_btn_copy.js";

/**
 * Set result for encode or decode
 * @param {textareaClassName} inputClass
 * @param {resultContainerClassName} outputClass
 * @param {encodeOrDecodeString} result
 */
export const setResult = (inputClass, outputClass, result) => {
  const $inputElement = document.querySelector(inputClass);
  const $outputElement = document.querySelector(outputClass);
  const $p = createPElement();

  $inputElement.value = "";
  $p.textContent = result;
  $outputElement.replaceChildren($p);
  setCopyButton(outputClass);
};

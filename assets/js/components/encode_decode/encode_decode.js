import { encodeOrDecodeOperation } from "./encode_decode_operation.js";
import { setResult } from "./set_result.js";

/**
 * Encode or decode a string
 * If type is equal to "encode", then encode the string
 * Otherwise decode the string
 * @param {textareaClassName} inputClass
 * @param {outputClassName} outputClass
 * @param {typeOfOperation} type
 */
export const encodeOrDecode = (inputClass, outputClass, type) => {
  const $inputElement = document.querySelector(inputClass);
  if (type === "encode") {
    setResult(
      inputClass,
      outputClass,
      encodeOrDecodeOperation($inputElement.value, 0, 1)
    );
  } else {
    setResult(
      inputClass,
      outputClass,
      encodeOrDecodeOperation($inputElement.value, 1, 2)
    );
  }
};

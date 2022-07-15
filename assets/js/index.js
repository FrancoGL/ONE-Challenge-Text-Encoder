import encodeInput from "./encode_input.js";
import validateInput from "./validate_input.js";

document.addEventListener("DOMContentLoaded", (e) => {
  validateInput();
  encodeInput("btn-encoder","input__area", "output");
});

import { setImageElement } from "./components/set_img/set_image.js";
import { validateInput } from "./components/validate_input/validate_input.js";
import { encodeOrDecode } from "./components/encode_decode/encode_decode.js";
import { copyOperation } from "./components/copy_btn/copy_action.js";

document.addEventListener("DOMContentLoaded", () => {
  setImageElement();
});

document.addEventListener("input", (e) => {
  validateInput(e.target);
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".btn-encoder")) {
    encodeOrDecode(".textarea", ".result__container", "encode");
  }
  if (e.target.matches(".btn-decoder")) {
    encodeOrDecode(".textarea", ".result__container", "decode");
  }

  if (e.target.matches(".btn-copy")) {
    copyOperation(".result__title", ".btn-copy");
  }
});

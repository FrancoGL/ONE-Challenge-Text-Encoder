import {setImageElement} from "./components/set_image.js";
import { validateInput } from "./components/validate_input.js";

document.addEventListener("DOMContentLoaded", () => {
  setImageElement()
})

document.addEventListener("input", e => {
  validateInput(e.target)
})
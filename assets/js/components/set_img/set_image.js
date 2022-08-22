import { generateImageElement } from "./generate_img.js";

/**
 * Set image doll to "result__container" element
 * Only if windowSize is greater or equal to 1024px
 */

export const setImageElement = () => {
  const $output = document.querySelector(".result__container")
  let windowSize = window.innerWidth;
  if (windowSize >= 1024) {
      $output.insertBefore(generateImageElement(), $output.firstChild);
  }
};
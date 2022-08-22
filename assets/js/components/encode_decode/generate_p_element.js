/**
 * Only generate a "p" element
 * @returns p element
 */
export const createPElement = () => {
  let pElement = document.createElement("p");
  pElement.classList.add("result__title");

  return pElement
}
/**
 * Generate a btn for the copy operation
 * @return {btnElement} copyButtonElement
 */
export const generateCopyButton = () => {
  let copyButtonElement = document.createElement("button");
  copyButtonElement.classList.add("btn-copy");
  copyButtonElement.innerHTML = "Copy";
  return copyButtonElement;
};

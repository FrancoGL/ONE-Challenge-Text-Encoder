/**
 * Execute the copy operation
 * @param {outputTextClassName} outputClassText
 * @param {btnCopyClassName} btnCopyClassName
 */
export const copyOperation = (outputClassText, btnCopyClassName) => {
  const $outputText = document.querySelector(outputClassText);
  const $btnCopy = document.querySelector(btnCopyClassName);
  navigator.clipboard.writeText($outputText.textContent).then(() => {
    $btnCopy.innerText = "Copied";
  });
};

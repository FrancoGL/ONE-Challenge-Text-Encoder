export const copyOperation = () => {
    const $outputText = document.querySelector(".output__text")
    const $btnCopy = document.getElementById("button--copy")
    navigator.clipboard.writeText($outputText.textContent)
        .then(() => {
            $btnCopy.innerText = "Copied"
        });
}
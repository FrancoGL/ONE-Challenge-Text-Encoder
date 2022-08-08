const generateCopyButton = () => {
    let copyButtonElement = document.createElement("button");
    const buttonClassesGroup = [
        "buttons__btn",
        "buttons__btn--white",
        "buttons__btn--copy",
    ];
    copyButtonElement.id = "button--copy";
    for (let i = 0; i < 3; i++) {
        copyButtonElement.classList.add(buttonClassesGroup[i]);
    }
    copyButtonElement.innerHTML = "Copy";
    return copyButtonElement;
};

export const setCopyButton = () => {
    const $output = document.getElementById("output")
    const $btnCopy = generateCopyButton()

    $output.appendChild($btnCopy)
}
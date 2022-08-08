const setWarning = () => {
    const $warning = document.getElementById("warning")
    $warning.classList.add("warning__text--highlight");
    setTimeout(() => {
        $warning.classList.remove("warning__text--highlight");
    }, 3000);
}

const removeInvalidCharacter = ($input) => {
    $input.value = $input.value.replaceAll(/[A-Z]|\d|\W/g, "");
}

export const validateInput = (element) => {
    const regExp = new RegExp(/[A-Z]|\d|\W/)

    if (element.value !== null && element.value.match(regExp)) {
        setWarning()
        removeInvalidCharacter(element)
    }
}

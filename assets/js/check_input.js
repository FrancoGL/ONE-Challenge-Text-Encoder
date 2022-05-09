export let userInput = document.getElementById("input__area")
let warning = document.getElementById("warning")

let regx = new RegExp(/[A-Z]|\d|\W/);

const setWarning = () => {
    warning.classList.add("warning__text--highlight");
    setTimeout(() => {
        warning.classList.remove("warning__text--highlight");
    }, 2000)
}

const deleteInvalidValue = () => {
    userInput.value = userInput.value.replaceAll(/[A-Z]|\d|\W/g, "");
}

export const check_input = (eventInput) => {

    if (eventInput.data !== null && eventInput.data.toString().match(regx) !== null) {
        setWarning();
        deleteInvalidValue();
    }
}
import {userInput} from './check_input.js';
export let btnEncoder = document.getElementById("btn-encoder")
export const encryptionGroup = [[/e/g, "enter","e"], [/i/g, "imes","i"], [/a/g, "ai","a"], [/o/g, "ober","o"], [/u/g, "ufat","u"]] // Regxp | Key | character

export const encode = (text) => {
    encryptionGroup.forEach(element => {
        text = text.replaceAll(element[0], element[1])
    })
    userInput.value = "";
    return text;
}


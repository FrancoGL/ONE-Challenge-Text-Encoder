import {userInput} from './check-input.js';
import {encryptionGroup} from './encode.js';
export let btnDecoder = document.getElementById("btn-decoder")


export const decode = (text) => {

    encryptionGroup.forEach(element => {
        text = text.replaceAll(element[1], element[2])
    })
    userInput.value = ""
    return text;
}
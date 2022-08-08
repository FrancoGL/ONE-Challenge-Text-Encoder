import {ENCRYPTION_RULES} from "../utils/encryption_rules.js";
import {setCopyButton} from "./copy_btn.js";

const createPElement = () => {
    let pElement = document.createElement("p");
    pElement.classList.add("output__text");

    return pElement
}

export const encodeOrDecodeInput = (type) => {
    const $input = document.getElementById("input__area")
    const $outputArea = document.getElementById("output")
    let text = $input.value
    let $pElement = createPElement();
    let indexMatch = 0
    let indexReplace = 0

    if (type === "encode") {
        indexMatch = 0
        indexReplace = 1
    } else {
        indexMatch = 1
        indexReplace = 2
    }

    if ($input.value !== "") {
        ENCRYPTION_RULES.forEach(rule => {
            text = text.replaceAll(rule[indexMatch], rule[indexReplace]);
        })

        $input.value = ""
        $pElement.textContent = text;
        $outputArea.replaceChildren($pElement)
        setCopyButton()
    }
}

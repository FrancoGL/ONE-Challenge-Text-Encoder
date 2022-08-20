import {validateInput} from "./components/validate_input.js";
import {encodeOrDecodeInput} from "./components/encode_decode_input.js";
import {setImageElement} from "./components/add_img.js";
import {copyOperation} from "./components/copy_operation.js";

document.addEventListener("DOMContentLoaded", (e) => {
    setImageElement()
});


document.addEventListener("input", (e) => {
    if (e.target.matches("#input__area")) {
        validateInput(e.target)
    }
})

document.addEventListener("click", (e) => {

    if (e.target.matches("#btn-encoder")) {
        encodeOrDecodeInput("encode")
    }

    if (e.target.matches("#btn-decoder")) {
        encodeOrDecodeInput("decoder")
    }

    if (e.target.matches("#button--copy")) {
        copyOperation()
    }
})
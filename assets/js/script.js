import { check_input, userInput } from "./check_input.js";
import { encode, btnEncoder } from "./encode.js";
import { decode, btnDecoder } from "./decode.js";
let outputTextContent = document.getElementById("output--text");
let userOutput = document.getElementById("output");
let btnCopy;

// Check input event handler
userInput.addEventListener("input", (inputText) => {
  check_input(inputText);
});

// Generate Image Element
const generateImageElement = () => {
  let img = document.createElement("img");
  img.id = "doll";
  img.classList.add("output__doll");
  img.alt = "doll image";
  img.src = "./assets/img/doll.svg";
  return img;
};
// Set Image If Width is equal or greater than to 1024px
const setImageElement = () => {
  let windowSize = window.innerWidth;
  if (windowSize >= 1024) {
    userOutput.insertBefore(generateImageElement(), userOutput.firstChild);
  }
};
// Execute SetImageElement
setImageElement();

// Generate Copy Button Element
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

// Encoding event handler
btnEncoder.addEventListener("click", () => {
  console.log(userInput.value);
  if (userInput.value !== "") {
    outputTextContent.innerHTML = encode(userInput.value);
    userOutput.replaceChildren(outputTextContent, generateCopyButton());
    
    // Get button copy element
    btnCopy = document.getElementById("button--copy");
    // Execute copy event
    copyEvent();
  } else {
    alert("Any text found")
  }
});

// Decoding event handler
btnDecoder.addEventListener("click", () => {
  if (userInput.value !== "") {
    outputTextContent.innerHTML = decode(userInput.value);
    userOutput.replaceChildren(outputTextContent, generateCopyButton());

    // Get button copy element
    btnCopy = document.getElementById("button--copy");
    // Execute copy event
    copyEvent();
  } else {
    alert("Any text found");
  }
});

const copyToClipboard = () => {
  let actualText = outputTextContent.innerText;
  navigator.clipboard.writeText(actualText)
      .then(()=> {
        btnCopy.innerText = "Copied"
      });
};

const copyEvent = () => {
  if (btnCopy !== null) {
    btnCopy.addEventListener("click", copyToClipboard);
  }
};

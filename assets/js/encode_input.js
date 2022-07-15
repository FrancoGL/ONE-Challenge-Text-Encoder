export default function encodeInput(btnEncode, inputArea, outputArea) {
  const encryptionGroup = [
    [/e/g, "enter", "e"],
    [/i/g, "imes", "i"],
    [/a/g, "ai", "a"],
    [/o/g, "ober", "o"],
    [/u/g, "ufat", "u"],
  ];

  const $btnEncode = document.getElementById(btnEncode),
    $inputArea = document.getElementById(inputArea),
    $outputArea = document.getElementById(outputArea);

  let encodedText;
  let pElement = document.createElement("p");
  pElement.classList.add("output__text");

  $btnEncode.addEventListener("click", (e) => {
    if ($inputArea.value !== "") {
      encryptionGroup.forEach((element) => {
        encodedText = $inputArea.value.replaceAll(element[0], element[1]);
      });
      pElement.textContent = encodedText;
      $outputArea.replaceChildren(pElement);
    }
  });
}

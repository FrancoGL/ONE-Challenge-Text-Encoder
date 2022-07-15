export default function validateInput() {
  const $input = document.getElementById("input__area"),
    $warning = document.getElementById("warning"),
    regExp = new RegExp(/[A-Z]|\d|\W/);

  const setWarning = () => {
    $warning.classList.add("warning__text--highlight");
    setTimeout(() => {
      $warning.classList.remove("warning__text--highlight");
    }, 3000);
  };

  const removeInvalidCharacters = () => {
    $input.value = $input.value.replaceAll(/[A-Z]|\d|\W/g, "");
  };

  $input.addEventListener("input", (e) => {
    if (e.data != null && e.data.match(regExp)) {
      setWarning();
      removeInvalidCharacters();
    }
  });
}

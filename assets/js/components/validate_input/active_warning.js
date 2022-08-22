/**
 * Add class "active" to "warning__text" 
 */

export const setWarning = () => {
  const $warning = document.querySelector(".warning__text")
  $warning.classList.add("active");
  setTimeout(() => {
      $warning.classList.remove("active");
  }, 3000);
}
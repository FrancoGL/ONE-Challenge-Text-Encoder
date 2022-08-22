export const generateImageElement = () => {
  let img = document.createElement("img");
  img.id = "doll";
  img.classList.add("result__doll");
  img.alt = "doll image";
  img.src = "./assets/img/doll.svg";
  return img;
};
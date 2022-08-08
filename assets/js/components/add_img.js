const generateImageElement = () => {
    let img = document.createElement("img");
    img.id = "doll";
    img.classList.add("output__doll");
    img.alt = "doll image";
    img.src = "./assets/img/doll.svg";
    return img;
};

export const setImageElement = () => {
    const $output = document.getElementById("output")
    let windowSize = window.innerWidth;
    if (windowSize >= 1024) {
        $output.insertBefore(generateImageElement(), $output.firstChild);
    }
};
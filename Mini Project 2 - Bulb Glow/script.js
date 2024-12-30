const light = document.querySelector(".light");
const powerBtn = document.querySelector(".buttonSvg");

powerBtn.addEventListener("click",
    () => {
        light.classList.toggle("grey");
        document.body.classList.toggle("bright");
        powerBtn.classList.toggle("grey");
    }
);


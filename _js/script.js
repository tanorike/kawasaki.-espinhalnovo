const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel() {
    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }

    const carrosselWidth = document.querySelector(".carrosel").offsetWidth;
    imgs.style.transform = `translateX(${-idx * carrosselWidth}px)`;
}

setInterval(carrossel, 6800);
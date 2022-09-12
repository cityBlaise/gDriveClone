let carousel = document.querySelectorAll('.card-wapper')[0];
let card_triger = document.querySelectorAll('.item-target-wapper .item');

let carouselWidth = null;
let cardCount = null;
let currentELmt = document.querySelector(".item-target-wapper .item.active")


for (let i = 0; i < card_triger.length; i++) {
    const element = card_triger[i];
    element.addEventListener("click", function () {
        carouselWidth = carousel.offsetWidth;
        cardCount = document.querySelectorAll(".card-wapper .card-item").length;
        if (element !== currentELmt) {
            currentELmt.classList.remove('active')
            element.classList.add('active')
            currentELmt = element
            let offset = carouselWidth * i;
            console.log(carousel)
            carousel.style.transform = `translateX(-${offset}px)`;
            carousel.style.transition = ` transform 500ms ease-in-out`;
        }
    })
}


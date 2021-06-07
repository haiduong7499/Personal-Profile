const paralax = document.querySelector("#banner");

window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    banner.style.backgroundPositionY = offset*0.7 + "px"
})
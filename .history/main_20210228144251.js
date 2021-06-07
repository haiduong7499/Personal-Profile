const paralax = document.querySelector("#parallax");

window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    banner.style.backgroundPositionY = offset*0.7 + "px"
})
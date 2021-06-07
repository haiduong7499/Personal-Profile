const paralax = document.querySelector("#parallax");

window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset*1 + "px"
})

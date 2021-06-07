const paralax = document.querySelector("#parallax");

window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    console.log(offset)
    parallax.style.backgroundPositionY = offset*1 + "px"
})
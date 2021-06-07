const paralax = document.querySelector("#parallax");

window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset*1 + "px"
})


var arr = [1, 2, 3, 5, 6, 8];
var max = arr[0] *arr[1]; 

for(let i = 0; i < arr.length; i++){
    
        let product = arr[i] * arr[i+1];
        if(product > max){
            max = product;
        }
    
    console.log(max);
}


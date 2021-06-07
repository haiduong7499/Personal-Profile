const paralax = document.querySelector("#parallax");

window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset*1 + "px"
})


let arr = [1, 2, 3, 5, 6, 1];
let max; 
for(let i = 0; i < arr.length; i++){
	max = arr[0]*arr[1];
    if(i<i+1){
    let value = arr[i]* arr[i+1];
    if(max < value){
    	max = value
         }
    }
    
}
console.log(max);
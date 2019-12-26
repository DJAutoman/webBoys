let shopping = document.querySelector(".shopping-cart");
let cart = document.querySelector("#shopping-right");
cart.onmouseenter = function(){
    shopping.style.display = "block"
}
cart.onmouseleave = function(){
    shopping.style.display = "none"
}

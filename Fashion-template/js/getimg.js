function getomg() {
    var img = document.querySelectorAll(".omg");
    console.log(img);
    for(var i=0 ; i<img.length ; i++){
      img[i].onmouseover = function(){
        img[0].src = this.src.replace('bag','big');
    }
  }
}
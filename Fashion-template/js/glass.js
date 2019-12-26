let bigImg    = document.querySelector(".big-img");
let smallImg  = document.querySelector(".small-img");
let smallBox  = document.querySelector(".small-box");
let bigBox    = document.querySelector(".big-box");
let mirror    = document.querySelector(".mirror");
let container = document.querySelector(".container");

bigImg.style.width  = parseInt(getStyle(smallImg, "width")) * parseInt(getStyle(bigBox, "width")) / parseInt(getStyle(mirror, "width")) + "px";
bigImg.style.height = parseInt(getStyle(smallImg, "height")) * parseInt(getStyle(bigBox, "height")) / parseInt(getStyle(mirror, "height")) + "px";

smallBox.onmouseenter = function() {
    mirror.style.display = "block";
    bigBox.style.display = "block";
}

smallBox.onmouseleave = function() {
    mirror.style.display = "none";
    bigBox.style.display = "none";
}

smallBox.onmousemove = function(event) {

    // let _top  = event.clientY - container.offsetTop - smallBox.offsetTop - mirror.offsetHeight / 2;
    // let _left = event.clientX - container.offsetLeft - smallBox.offsetLeft - mirror.offsetWidth / 2;
    let _top =event.clientY - smallBox.getBoundingClientRect().top - mirror.offsetHeight / 2;
    let _left = event.clientX - smallBox.getBoundingClientRect().left - mirror.offsetWidth / 2;

    let maxY = smallImg.offsetHeight - mirror.offsetHeight;
    let maxX = smallImg.offsetWidth - mirror.offsetWidth;

    // 边界问题
    if(_top < 0) {
        _top = 0;
    }else if(_top > maxY) {
        _top = maxY;
    }

    if(_left < 0) {
        _left = 0;
    }else if(_left > maxX) {
        _left = maxX;
    }

    mirror.style.top  = _top  + "px";
    mirror.style.left = _left + "px";

    bigImg.style.left = -(_left * (bigImg.offsetWidth - bigBox.offsetWidth) / maxX) + "px";
    bigImg.style.top  = -(_top  * (bigImg.offsetHeight - bigBox.offsetHeight) / maxY) + "px";
}
 



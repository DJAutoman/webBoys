function trans() {
  let flash = document.querySelector(".trans .flash");
  let wrapper = document.querySelector(".trans .wrapper");
  let prevBtn = document.querySelector(".prev");
  let nextBtn = document.querySelector(".next");
  let width = parseInt(getStyle(flash, "width"));
  wrapper.style.transform = `translateX(-${width}px)`;
  let curIndex = 1,
    lastIndex = 1; 
  isAnimating = true; 
    prevBtn.onclick = function() {
      curIndex = curIndex == 0 ? 7 : --curIndex;
      tab();
    };
    
    nextBtn.onclick = function() {
      curIndex = curIndex == 7 ? 0 : ++curIndex;
      tab();
    };

  function tab() {
        if (!isAnimating) {
            return;
        }
        isAnimating = false;
 
    wrapper.style.transform = `translateX(${curIndex * -width}px)`;
    setTimeout(() => {
    
      
      if (
        (curIndex < lastIndex && curIndex == 0) ||
        (curIndex > lastIndex && curIndex == 7)
      ) {
        wrapper.style.transition = "none";
        
        let index = curIndex < lastIndex ? 6 : 1;

        wrapper.style.transform = `translateX(${index * -width}px)`;
        setTimeout(() => {
          wrapper.style.transition = "all .3s linear";
          curIndex = index;
          isAnimating = true;
        }, 300);
      } else {
          isAnimating = true;
        lastIndex = curIndex;
      }
    }, 300);
  }
  function getStyle(el, attr) {
    if (el.currentStyle) {
      return el.currentStyle[attr];
    } else {
      return getComputedStyle(el, null)[attr];
    }
  }

  setInterval(() => {
    nextBtn.onclick();
  }, 3000);
}

trans();

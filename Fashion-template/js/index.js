//头部变色
// let idots = [...document.querySelectorAll(".idot")];
// let _curIndex = 0 ;
// let _lastIndex = 0 ;

// idots.forEach(function (idot, index){
//     idot.onclick = function(){
//         let pageUrl = location.href;
//         if(pageUrl.includes('index.html')){
//             _curIndex =index;
//             tab();
//         }
//         if(pageUrl.includes('jacket.html')){
//             _curIndex =index;
//             tab();
//         }
//     }
// })
// function tab(){
//     console.log(_lastIndex,_curIndex);
//     idots[_lastIndex].classList.remove("deep-color");
//     idots[_curIndex].classList.add("deep-color");
//     _lastIndex = _curIndex
// }

//回到顶部
//自调用
(function (){
    //记录滚蛋距离
    let _offset = 0 ;
    //监听
    window.onscroll = function (){
        _offset = document.body.scrollTop || document.documentElement.scrollTop;
    }
    //点击按钮
    let btn = document.querySelector("#hand-top");
    btn.onclick = function(){
        let duration = 500;
        let interval = 15;
        let frames = duration / interval;
        let speed = Math.ceil(_offset / frames);
        let t = setInterval(()=>{
            document.body.scrollTop =
                document.documentElement.scrollTop = _offset - speed;
                if (_offset <= 0){
                    clearInterval(t);
                    document.body.scrollTop =
                    document.documentElement.scrollTop = 0;
                }
        },interval)
    }
})();

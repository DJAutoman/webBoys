

$.ajax({
  url: `${BASE_URL}/ladyclothes?type=外套`,
  type: "get",
  //数据格式
  dataType: "json"
})
  .done(res => {
    console.log(res.data);
    let letchovre = document.querySelector(".container-right-comment");

    let htmlStr = "";

   
    res.data.forEach((items) => {
      console.log(items)
      htmlStr += `
      <div class="relaxation correlation-pic" data-name="${items.name}" data-ind="${items.ind}" data-price="${items.price}">
                  <img class="omg" src="${items.name}" alt="loding" />
                  <h4>${items.ind}</h4>
                  <h6>${items.price}</h6>
                </div>
    `;

    });
    letchovre.innerHTML = htmlStr;

    let shoppingjacket = [...document.querySelectorAll(".relaxation")];
    let cartList = document.querySelector(".cart-list");
    console.log(cartList);
    console.log(shoppingjacket)
    let htmlString = "";
    shoppingjacket.forEach((gg,index) =>{
      console.log(gg.dataset.name.split("/")[gg.dataset.name.split("/").length-1])
      gg.onclick = function(){
        console.log('点了一次')
        htmlString += `<div>
        <div class="carjackettt">
        <img class="carjacket" src="${gg.dataset.name}" />
        </div>
        <div class="carjackettt">
        <h3>${gg.dataset.ind}</h3>
        <h5>${gg.dataset.price}</h5>
        </div>
        </div>
        `
        cartList.innerHTML = htmlString

        $.ajax({
          url: `${BASE_URL}/gameover/register`,
          type: "POST",
          dataType: "json",
          data: {
            name: gg.dataset.name.split("/")[gg.dataset.name.split("/").length-1],
            ind: gg.dataset.ind,
            price: gg.dataset.price
          }
        })
      }
    })
    
   
    getomg();
  })
  .fail(err => {
    console.log(err);
  });



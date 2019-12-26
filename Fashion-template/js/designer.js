const BASE_URL = "http://10.2.0.145:80";

$.ajax({
    url: `${BASE_URL}/designer`,
    //数据格式
    dataType: "json"
  })
    .done(res => {

      let individual = document.querySelector(".individual");

      let htmlStr = "";
      res.data.forEach((items,index) => {
        htmlStr += `
        <div class="figure">
        <div class="portrait">
          <img src="${items.name}" alt="loding" />
        </div>
        <div class="portrait-position">${items.design}</div>
        <div class="portrait-name">
          <h1>${items.position}</h1>
          <h2>${items.who}</h2>
        </div>
        <div class="portrait-content">
          <span>
          ${items.ind}
          </span>
        </div>
      </div>
        `
        ;
      });
  
      individual.innerHTML = htmlStr;
    })
    .fail(err => {
      console.log(err);
    });
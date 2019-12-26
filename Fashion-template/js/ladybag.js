const BASE_URL = "http://10.2.0.145:80";

$.ajax({
  url: `${BASE_URL}/ladybag?type=女士包`,
  type: "get",
  dataType: "json"
})
  .done(res => {
    console.log(res.data);
    let letchovre = document.querySelector(".correlation");

    let htmlStr = "";
    res.data.forEach((items, index) => {
      htmlStr += `
      <div class="correlation-pic  corrpicture">
      <img src="${items.name}" alt="" />
      <h4>${items.ind}</h4>
      <h5>${items.price}</h5>
    </div>
    `;
    });

    letchovre.innerHTML = htmlStr;
    getomg();
  })
  .fail(err => {
    console.log(err);
  });

  function getomg() {
    var img = document.querySelectorAll(".omg");
    console.log(img);
    for(var i=0 ; i<img.length ; i++){
      img[i].onmouseover = function(){
        img[0].src = this.src.replace('bag','big');
    }
  }
}
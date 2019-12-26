const BASE_URL = "http://10.2.0.145:80";

$.ajax({
    url: `${BASE_URL}/clothes`,
    dataType: "json"
  })
    .done(res => {
      let letchovre = document.querySelector(".container-box");
  
      let htmlStr = "";
      res.data.forEach(items => {
        htmlStr += `
        <a href="../pages/particulars.html">
              <div class="letchovre">
                <img
                  src="${items.name}"
                  alt=""
                />
                <div class="link_title">${items.ind}</div>
              </div>
            </a>
        `
        ;
      });
  
      letchovre.innerHTML = htmlStr;
    })
    .fail(err => {
      console.log(err);
    });
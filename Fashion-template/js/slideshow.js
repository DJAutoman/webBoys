const BASE_URL = "http://10.2.0.145:80";

$.ajax({
    url: `${BASE_URL}/slideshow`,
 
    dataType: "json"
  })
    .done(res => {
      let trans = document.querySelector(".trans i");
  
      let htmlStr = "";
      res.data.forEach(items => {
        htmlStr += `
            <img src="${items.name}"  alt="loadding err">
        `
        ;
      });
  
      trans.innerHTML = htmlStr;
    })
    .fail(err => {
      console.log(err);
    });
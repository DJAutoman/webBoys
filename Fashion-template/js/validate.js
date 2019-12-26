let validateFormOpt = {
  fieldsOpt: {
    username: {
      rule: { reg: /^[a-zA-Z]\w{5}/ },
      successMsg: " ",
      errorMsg: "按照 /^[a-zA-Z]w{5}/的格式输入",
      selector: "#username"
    },
    email: {
      rule: { reg: /^\w{2,}@\w{2,}\.[A-Za-z0-9]{2,}$/ },
      successMsg: " ",
      errorMsg: "邮箱格式不对",
      selector: "#email"
    },
    password1: {
      rule: { reg: /^.{6,20}$/ },
      successMsg: " ",
      errorMsg: "密码长度为6-20位",
      selector: "#password1"
    },
    password2: {
      rule: { reg: /^.{6,20}$/, equal: "password1" },
      successMsg: " ",
      errorMsg: "两次密码不一样",
      selector: "#password2"
    }
  },
  submit: {
    selector: "#submit"
  },
  valiField: function(field, valiRes) {
    let curIpt = document.querySelector(this.fieldsOpt[field].selector);
    let infoSpan = curIpt.nextElementSibling;
    if (valiRes) {
      curIpt.parentElement.classList.add("has-success");
      curIpt.parentElement.classList.remove("has-error");
      infoSpan.innerText = this.fieldsOpt[field].successMsg;
      console.log(`${field}验证成功`);
    } else {
      curIpt.parentElement.classList.remove("has-success");
      curIpt.parentElement.classList.add("has-error");
      infoSpan.innerText = this.fieldsOpt[field].errorMsg;
      console.log(`${field}验证失败`);
    }
  },
  success: function(e) {
    e.preventDefault();
    console.log("验证成功");
  },
  error: function(e) {
    e.preventDefault();
    console.log("验证失败");
  }
};
let vf = new ValidateForm(validateFormOpt);
vf.validate();
 
let submitBtn = document.querySelector("#submit");
// 添加点击事件
submitBtn.onclick = function (e) {  
const BASE_URL = "http://10.2.0.145";

let usernamePass = /^[a-zA-Z]\w{5}/.test(username.value);
let emailPass = /^\w{2,}@\w{2,}\.[A-Za-z0-9]{2,}$/.test(email.value);
let passwordPass = /^.{6,20}$/.test(password1.value);

// console.log(usernamePass);
// console.log(emailPass);
// console.log(passwordPass);

let pass = usernamePass && emailPass && passwordPass;

// console.log(pass);

// console.log(username.value);
// console.log(email);
if (!pass) {
  e.preventDefault();
//   console.log(e);
} else {
  $.ajax({
    url: `${BASE_URL}/register`,
    type: "POST",
    dataType: "json",
    data: {
      username: `${username.value}`,
      password: `${password1.value}`,
      email: `${email.value}`
    }
  })
    .done(res => {
      if (res.data == "注册成功") {
        alert(res.data);
        window.location.href = "../pages/login_register.html";
      } else {
        alert(res.data);
      }
    })
    .fail(err => {
      alert(err.data);
    });
}
}
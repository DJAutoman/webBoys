const BASE_URL = "http://10.2.0.145";

let usernamePass = /^[a-zA-Z]\w{5}/.test(username.value);
let emailPass = /^\w{2,}@\w{2,}\.[A-Za-z0-9]{2,}$/.test(email.value);
let passwordPass = /^.{6,20}$/.test(password1.value);

console.log(usernamePass);
console.log(emailPass);
console.log(passwordPass);

let pass = usernamePass && emailPass && passwordPass;
console.log(username.value);
console.log(email);
if (!pass) {
  e.preventDefault();
} else {
  $.ajax({
    url: `${BASE_URL}/register`,
    type: "POST",
    dataType: "json",
    data: {
      username: `${username.value}`,
      password: `${password.value}`,
      email: `${email.value}`
    }
  })
    .done(res => {
      if (res.data == "注册成功") {
        alert(res.data);
        window.location.href = "../index.html";
      } else {
        alert(res.data);
      }
    })
    .fail(err => {
      alert(err.data);
    });
}

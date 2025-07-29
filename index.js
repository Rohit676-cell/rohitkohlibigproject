var login_btn = document.getElementById("login_link");
var sign_btn = document.getElementById("signup_link");
var login_box = document.getElementById("login")
var signup_box = document.getElementById("signup")
login_btn.onclick = function () {
    login_box.style.display = "block"
    signup_box.style.display = "none"



}
sign_btn.onclick = function () {
    login_box.style.display = "none"
    signup_box.style.display = "block"
}
//start Sign up coding 
var signup_frm = document.getElementById("signup_frm");

signup_frm.onsubmit = function () {
    var user = btoa(document.getElementById("username").value);
    var email = btoa(document.getElementById("email").value);     // ✅ fixed spelling
    var phone = btoa(document.getElementById("phone").value);     // ✅ fixed spelling
    var pass = btoa(document.getElementById("password").value);

    var user_object_data = {
        username: user,
        email: email,
        phone: phone,
        password: pass
    };

    var user_text_data = JSON.stringify(user_object_data);

    if (user != "" && email != "" && phone != "" && pass != "") {
        localStorage.setItem(email, user_text_data);
        var sign_btn = document.getElementById("signup_btn");
        sign_btn.style.background = "#14b129"
        sign_btn.innerHTML = "<i class='fa fa-check-circle' aria-hidden='true'></i> Signup successful !"
        setTimeout(function () {
            sign_btn.style.background = "linear-gradient(to right, #E100FF, #7F00FF)"
            sign_btn.innerHTML = "Sign up"
            signup_frm.reset();

        }, 3000);
        return false;
    }
}
//end sing up coding


//start email validation coding 
var email_input = document.getElementById("email")
email_input.onchange = function () {
    var email = btoa(document.getElementById("email").value);
    var warning = document.getElementById("email_notice")
    var sign_btn = document.getElementById("signup_btn");
    if (localStorage.getItem(email) != null) {

        warning.style.display = "block";
        email_input.style.borderBottomColor = "red"
        sign_btn.disabled = true;
        sign_btn.style.background = "#ccc"

        email_input.onclick = function () {
            email_input.value = "";
            email_input.style.borderBottom = "#ccc"
            warning.style.display = "none"
            sign_btn.style.background = "linear-gradient(to right, #E100FF, #7F00FF)"
            sign_btn.disabled = false;
        }


    }
}
//end email validation coding



// start login coding 
var login_frm = document.getElementById("login_frm");
login_frm.onsubmit = function () {
    var email = document.getElementById("login_email")
    var password = document.getElementById("login_passward")
    var login_email_war = document.getElementById("login_email_warning")
    var login_passward_war = document.getElementById("login_password_warning")
    if (localStorage.getItem(btoa(email.value)) == null) {
        login_email_war.style.display = "block";
        email.style.borderBottomColor = "red"
        email.onclick = function () {
            email.value = ""
            login_email_war.style.display = "none"
            email.style.borderBottomColor = "#ccc"
        }
    }
    else {
        var text_data = localStorage.getItem(btoa(email.value));
        var obj_data = JSON.parse(text_data);
        var correct_email = obj_data.email;
        var correct_password = obj_data.password;
        if (btoa(email.value) == correct_email) {
            if (btoa(password.value) == correct_password) {
                sessionStorage.setItem("user", btoa(email.value));
                window.location.replace("profile/profile.html")
            }
            else {
                login_passward_war.style.display = "block";
                password.style.borderBottomColor = "red"
                password.onclick = function () {
                    password.value = ""
                    login_passward_war.style.display = "none"
                    password.style.borderBottomColor = "#ccc"
                }
            }
        }
    }
    return false;
}



















//end login coding 

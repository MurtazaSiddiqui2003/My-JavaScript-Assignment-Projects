var uname = document.getElementById("name")
var email = document.getElementById("email")
var password = document.getElementById("password")
var btn = document.getElementById("btn")


function chk() {
    if (
        uname.value !== "" &&
        email.value !== "" &&
        password.value !== ""
    ) {
        btn.disabled = false
    }
    else {
        btn.disabled = true;
    }
}

uname.addEventListener("input", chk);
email.addEventListener("input", chk)
password.addEventListener("input", chk)

btn.addEventListener("click",
    function () {
        window.location.href = "about.html"
    })

function login() {
    userObj = {
        name: uname.value,
        email: email.value
    }
    var strforn = JSON.stringify(userObj);
    localStorage.setItem("user", strforn);}


const Upper = document.querySelector(".upper").checked
const num = document.querySelector(".num").checked
// const Symbols = document.querySelector(".symb").checked
// const button = document.querySelector(".btn")
// button.addEventListener("click", () => {
//     if (num == Upper && Upper == Symbols) {
//    let 
//     } else {
//         document.querySelector("#password").innerText = "Else"
//     }
// })

// function RandomLetter(min, max) {
//     return Math.floor(Math.random() * (max - min) + min)
// }



var password = document.getElementById("password");
function genPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    let r = 0
    let text = ""
    if (document.querySelector(".upper").checked == true && document.querySelector(".num").checked == true && document.querySelector(".symb").checked == true) {
        for (r in password) {
            if (r % 3 == 0) {
                text += password[r].toUpperCase()
            } else {
                text += password[r]
            }
        }
        document.querySelector('#password').innerText = password
    } else if (document.querySelector(".upper").checked == true && document.querySelector(".num").checked == true && document.querySelector(".symb").checked == false) {
        for (r in password) {
            if (Number(password[r]).toString() == "NaN") {
                if (password[r].toLowerCase() !== password[r].toUpperCase()) {
                    text += password[r]
                }
            } else {
                text += password[r]
            }
        }
        document.querySelector("#password").innerText = text
    } else if (document.querySelector(".upper").checked == true && document.querySelector(".num").checked == false && document.querySelector(".symb").checked == false) {
        for (r in password) {
            if (password[r].toLowerCase() !== password[r].toUpperCase()) {
                text += password[r]
            }
        }
        document.querySelector("#password").innerText = text
    } else if (document.querySelector(".upper").checked == false && document.querySelector(".num").checked == true && document.querySelector(".symb").checked == true) {
        for (r in password[r]) {
            if (Number(password[r]).toString() == "NaN") {
                if (password[r].toLowerCase() !== password[r].toUpperCase()) {
                    if (password[r].toUpperCase() !== password[r]) {
                        text += password[r]
                    }
                } else {
                    text += password[r]
                }
            } else {
                text += password[r]
            }
        }
        document.querySelector("#password").innerText = text
    }

}
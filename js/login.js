let email = document.querySelector("#email")
let password = document.querySelector("#password")
let loginBtn = document.querySelector("#login")

let getEmail = localStorage.getItem("email")
let getPassword = localStorage.getItem("password")

loginBtn.addEventListener("click" , function(e){
    e.preventDefault()
    if(email == " " || password == " "){
        alert("please fill data")
    }else if(getEmail  ===   email.value && getPassword === password.value){
        setTimeout (() => {
            window.location = "index.html"
        }, 1500)
    }else{
        alert("username or password is wrong, please enter correct data")
    }
})
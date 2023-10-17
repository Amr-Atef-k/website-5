let firstName = document.querySelector("#first-name")
let lastName = document.querySelector("#last-name")
let email = document.querySelector("#email")
let password = document.querySelector("#password")

let signupBtn = document.querySelector("#sign_up")

signupBtn.addEventListener("click", function(e){
    e.preventDefault()
    if(firstName.value == "" ||lastName.value == "" || email.value =="" || password.value == ""){
        alert("please fill data")
    }else{
        localStorage.setItem("firstName", firstName.value)
        localStorage.setItem("lastName", lastName.value)
        localStorage.setItem("email", email.value)
        localStorage.setItem("password", password.value)

        setTimeout(() =>{
            window.location = "login.html"
        }, 1500)
    }
})
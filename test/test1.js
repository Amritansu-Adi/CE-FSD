let username = document.querySelector("#username")
let password = document.querySelector("#password")

function Submit(){
    let usernameValue = username.value
    let passwordValue = password.value
    ValidateInput(usernameValue, passwordValue)
}

function ValidateInput(usernameValue, passwordValue){
    if(usernameValue === "admin"  && passwordValue === "admin"){
        document.querySelector("a").click()
    } 
    else {
        alert("Invalid credentials")
    }
}


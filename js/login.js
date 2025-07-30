import app from './firebase/firebase-config.js'
import auth from './firebase/firebase-config.js'

function showPassword() {
  const button = document.getElementById("showPassword")
  const passwordInput = document.getElementById("passwordInput")

  if (passwordInput.type === "password") {
    passwordInput.type = "text"
    button.src = "../imgs/eye.png"
  } else {
    passwordInput.type = "password"
    button.src = "../imgs/hidden.png"
  }
}



function goToCreateAccount(){
  window.location.href = "/createAccount"
}

function loginWithEmailAndPassword(email, password){

}
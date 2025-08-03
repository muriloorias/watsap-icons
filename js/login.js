import { app, auth } from "./firebase/firebase-config.js";

function showPassword() {
  const passwordInput = document.getElementById("passwordInput");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    button.src = "../imgs/eye.png";
  } else {
    passwordInput.type = "password";
    button.src = "../imgs/hidden.png";
  }
}

// Adicione isso no final do login.js
window.showPassword = showPassword;
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

function toggle() {
  let password = document.getElementById("password");
  let eye = document.getElementById("toggle");
    let eyeImg = document.getElementById('eyeImg')
  if (password.getAttribute("type") == "password") {
    password.setAttribute("type", "text");
    eyeImg.style.fill="#17c49e"
  } else {
    password.setAttribute("type", "password");
    eyeImg.style.fill="#808080"
  }
}

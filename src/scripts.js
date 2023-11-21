let parameters = {
    count:false,
    letters : false,
    num : false,
    special : false
}
let valueCheck = document.getElementById('value-bar')
let msg = document.getElementById('msg')

function checkValue(){
    let password = document.getElementById('password').value
    parameters.letters = (/[\w]+/).test(password)?true:false
    parameters.num = (/[\d]+/).test(password)?true:false
    parameters.special = (/[!\"$%&/()=?@~`\\.\';:+=^*_-]+/).test(password)?true:false;
    parameters.count = (password.length > 7)?true:false;
    let lineValue = Object.values(parameters).filter(value => value)
    valueCheck.innerHTML=""
    for (let i in lineValue){
        let span = document.createElement('span')
        span.classList.add('line')
        valueCheck.appendChild(span)
    }
    let spanRef = document.getElementsByClassName('line')
    for(let i =0 ; i<spanRef.length ; i++){
        switch (spanRef.length -1){
            case 0:
                spanRef[i].style.background="#ff3e36"
                msg.textContent ="your password is very weak"
                break
            case 1:
                    spanRef[i].style.background="#ff691f"
                    msg.textContent="your password is weak"
            case 2:
                spanRef[i].style.background = "#ffda36"
                msg.textContent = "your password is good"
                break
            case 3:
                spanRef[i].style.background = "#0be881"
                msg.textContent = "your password is strong"
        }
    }
}

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

function validateEmail(emailInput) {
  let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  if (emailInput.value.match(validRegex)) {
    return true
  } 
  else {
  return false
  } 
}

function validateName(nameInput) {
  let values = nameInput.value.split()
  if (values.length > 0 && values.length < 4) {
    validRegex = /^[a-zA-Zа-яА-ЯёЁ]+$/
    for(let i = 0; i < values.length; i++) {
      if (!validRegex.test(values[i])) {
        return false
      }
    }
    return true
  }
  return false
}

function validateForm (nameInput, emailInput) {
  let isNameValid = validateName(nameInput)
  let isEmailValid = validateEmail(emailInput)
  if (isNameValid && isEmailValid) {
    document.getElementById("output").innerHTML = "<p>Имя: " + nameInput.value + "<br>" + "Email:" + emailInput.value + "</p>"
    nameInput.value = ""
    emailInput.value = ""
  }
  else if (!isNameValid) {
    alert("Некорректное имя!")
  }
  else if (!isEmailValid) {
    alert("Некорректный email!")
  }
}

function clear () {
  inputName.value = ""
  inputEmail.value = ""
  document.getElementById("output").innerHTML = ""
}

let inputName = document.getElementById("name")
let inputEmail = document.getElementById("mail")
let submitButton = document.getElementById("button1")
let clearButton = document.getElementById("button2")

submitButton.onclick = () => validateForm(inputName, inputEmail)
clearButton.onclick = () => clear()
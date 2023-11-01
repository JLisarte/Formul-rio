const form = document.getElementById("form")
const username = document.getElementById("username")
const docUser = document.getElementById("doc-user")
const ageUser = document.getElementById("age-user")
const email = document.getElementById("email")
const postalCodeUser = document.getElementById("postalCode-user")
const adressUser = document.getElementById("adress-user")
const genderUser = document.getElementById("gender-user")
const bornDateUser = document.getElementById("bornDate-user")
const msgUser = document.getElementById("msg-user")

form.addEventListener("keyup", (e) => {
  e.preventDefault()
  formatCPF()
})

function formatCPF() {
  let value = docUser.value
    .replace(/[^0-9]/g, "")
    .replace(/^([\d]{3})([\d]{3})?([\d]{3})?([\d]{2})?/, "$1.$2.$3-$4")
  docUser.value = value
}

form.addEventListener("submit", (e) => {
  e.preventDefault()
  isCPF()
})

function isCPF() {
  const docUserValue = docUser.value
  cpf = docUserValue.replace(/\.|-/g, "")
  console.log(cpf)
  console.log(typeof cpf);
  

  if (docUserValue === "") {
    setErrorFor(docUser, "Preencha esse campo")
    return 
  } else if (
    docUserValue.length != 11 ||
    docUserValue === "00000000000" ||
    docUserValue === "11111111111" ||
    docUserValue === "22222222222" ||
    docUserValue === "33333333333" ||
    docUserValue === "44444444444" ||
    docUserValue === "55555555555" ||
    docUserValue === "66666666666" ||
    docUserValue === "77777777777" ||
    docUserValue === "88888888888" ||
    docUserValue === "99999999999"
  ) {
    setErrorFor(docUser, "CPF inválido")
    return 
  } else {
    setSuccessFor(docUser)
  }

  let soma = 0
  soma += cpf[0] * 10
  soma += cpf[1] * 9
  soma += cpf[2] * 8
  soma += cpf[3] * 7
  soma += cpf[4] * 6
  soma += cpf[5] * 5
  soma += cpf[6] * 4
  soma += cpf[7] * 3
  soma += cpf[8] * 2
  soma = (soma * 10) % 11
  if (soma == 10 || soma == 11) {
    soma = 0
  }
  if (soma != cpf[9]) {
    return false
  }

  soma = 0
  soma += cpf[0] * 11
  soma += cpf[1] * 10
  soma += cpf[2] * 9
  soma += cpf[3] * 8
  soma += cpf[4] * 7
  soma += cpf[5] * 6
  soma += cpf[6] * 5
  soma += cpf[7] * 4
  soma += cpf[8] * 3
  soma += cpf[9] * 2

  soma = (soma * 10) % 11
  if (soma == 10 || soma == 11) {
    soma = 0
  }
  if (soma != cpf[10]) {
    setErrorFor(docUser, "CPF inválido!")
    return false
  }

  setSuccessFor(docUser)
  return true
}

form.addEventListener("submit", (e) => {
  e.preventDefault()
  checkInputs()
})

function checkInputs() {
  const usernameValue = username.value.trim()
  const ageUserValue = ageUser.value.trim()
  const emailValue = email.value.trim()
  const postalCodeUserValue = postalCodeUser.value.trim()
  const adressUserValue = adressUser.value.trim()
  const genderUserValue = genderUser.value.trim()
  const bornDateUserValue = bornDateUser.value.trim()
  const msgUserValue = msgUser.value.trim()

  if (usernameValue === "") {
    setErrorFor(username, "Preencha esse campo")
  } else {
    setSuccessFor(username)
  }

  if (emailValue === "") {
    setErrorFor(email, "Preencha esse campo")
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email inválido")
  } else {
    setSuccessFor(email)
  }

  if (ageUserValue === "") {
    setErrorFor(ageUser, "Preencha esse campo")
  } else {
    setSuccessFor(ageUser)
  }

  if (postalCodeUserValue === "") {
    setErrorFor(postalCodeUser, "Preencha esse campo")
  } else {
    setSuccessFor(postalCodeUser)
  }

  if (adressUserValue === "") {
    setErrorFor(adressUser, "Preencha esse campo")
  } else {
    setSuccessFor(adressUser)
  }

  if (genderUserValue === "") {
    setErrorFor(genderUser, "Preencha esse campo")
  } else {
    setSuccessFor(genderUser)
  }

  if (bornDateUserValue === "") {
    setErrorFor(bornDateUser, "Preencha esse campo")
  } else {
    setSuccessFor(bornDateUser)
  }

  if (msgUserValue === "") {
    setErrorFor(msgUser, "Preencha esse campo")
  } else {
    setSuccessFor(msgUser)
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement
  const small = formControl.querySelector("small")

  small.innerText = message

  formControl.className = "form-control error"
}

function setSuccessFor(input) {
  const formControl = input.parentElement

  formControl.className = "form-control success"
}

function isEmail(email) {
  return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
    email
  )
}

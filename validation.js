const form = document.getElementById("form")
const username = document.getElementById("username")
const docUser = document.getElementById("doc-user")
const bornDateUser = document.getElementById("bornDate-user")
const ageUser = document.getElementById("age-user")
const email = document.getElementById("email")
const postalCodeUser = document.getElementById("postalCode-user")
const streetUser = document.getElementById("street-user")
const neighborhoodUser = document.getElementById("neighborhood-user")
const cityUser = document.getElementById("city-user")
const stateUser = document.getElementById("state-user")
const genderUser = document.getElementById("gender-user")
const msgUser = document.getElementById("msg-user")

docUser.addEventListener("keyup", formatCPF)

function formatCPF() {
  let cpfValue = docUser.value.trim()
  cpfValue = cpfValue.replace(/[^0-9]/g, "").substring(0, 11)
  const formattedCPF = cpfValue.replace(
    /^([\d]{3})([\d]{3})?([\d]{3})?([\d]{2})?/,
    "$1.$2.$3-$4"
  )
  console.log("Novo formato ", formattedCPF)
  docUser.value = formattedCPF
}

form.addEventListener("submit", (e) => {
  e.preventDefault()
  isCPF()
})

function isGenericCPF(CPFFormatado) {
  const genereicCPFs = [
    "00000000000",
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
  ]

  return genereicCPFs.includes(CPFFormatado)
}

function isCPF() {
  const docUserValue = docUser.value.trim()
  const CPFFormatado = docUserValue.replace(/\.|-/g, "")

  if (docUserValue === "") {
    setErrorFor(docUser, "Preencha esse campo")
    return
  }

  if (isGenericCPF(CPFFormatado)) {
    setErrorFor(docUser, "CPF inválido")
    console.log("CPF genérico")
    return
  }

  let soma = 0
  soma += CPFFormatado[0] * 10
  soma += CPFFormatado[1] * 9
  soma += CPFFormatado[2] * 8
  soma += CPFFormatado[3] * 7
  soma += CPFFormatado[4] * 6
  soma += CPFFormatado[5] * 5
  soma += CPFFormatado[6] * 4
  soma += CPFFormatado[7] * 3
  soma += CPFFormatado[8] * 2
  soma = (soma * 10) % 11
  if (soma == 10 || soma == 11) {
    soma = 0
  }
  if (soma != CPFFormatado[9]) {
    return false
  }

  soma = 0
  soma += CPFFormatado[0] * 11
  soma += CPFFormatado[1] * 10
  soma += CPFFormatado[2] * 9
  soma += CPFFormatado[3] * 8
  soma += CPFFormatado[4] * 7
  soma += CPFFormatado[5] * 6
  soma += CPFFormatado[6] * 5
  soma += CPFFormatado[7] * 4
  soma += CPFFormatado[8] * 3
  soma += CPFFormatado[9] * 2

  soma = (soma * 10) % 11
  if (soma == 10 || soma == 11) {
    soma = 0
  }
  if (soma != CPFFormatado[10]) {
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
  const streetUserValue = streetUser.value.trim()
  const neighborhoodUserValue = neighborhoodUser.value.trim()
  const cityUserValue = cityUser.value.trim()
  const stateUserValue = stateUser.value.trim()
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

  if (streetUserValue === "") {
    setErrorFor(streetUser, "Preencha esse campo")
  } else {
    setSuccessFor(streetUser)
  }

  if (neighborhoodUserValue === "") {
    setErrorFor(neighborhoodUser, "Preencha esse campo")
  } else {
    setSuccessFor(neighborhoodUser)
  }

  if (cityUserValue === "") {
    setErrorFor(cityUser, "Preencha esse campo")
  } else {
    setSuccessFor(cityUser)
  }

  if (stateUserValue === "") {
    setErrorFor(stateUser, "Preencha esse campo")
  } else {
    setSuccessFor(stateUser)
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

bornDateUser.addEventListener("keyup", calculoIdade)

function calculoIdade() {
  const dataNascimento = new Date(bornDateUser.value)
  const dia = String(dataNascimento.getDate()).padStart(2, "0")
  const mes = String(dataNascimento.getMonth() + 1).padStart(2, "0")
  const ano = dataNascimento.getFullYear()
  const dataFormatada = dia + "/" + mes + "/" + ano
  console.log(dataFormatada)

  const dataAtual = new Date()
  const diaAtual = String(dataAtual.getDate()).padStart(2, "0")
  const mesAtual = String(dataAtual.getMonth() + 1).padStart(2, "0")
  const anoAtual = dataAtual.getFullYear()
  const dataAtualFormatada = diaAtual + "/" + mesAtual + "/" + anoAtual
  console.log(dataAtualFormatada)

  const diff = dataAtual.getTime() - dataNascimento.getTime()
  const anos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))
  console.log(anos)
  document.getElementById("age-user").value = anos
}

postalCodeUser.addEventListener("keyup", buscaCep)

function buscaCep() {
  let postalValue = postalCodeUser.value.trim()
  postalValue = postalValue.replace(/[^0-9]/g, "").substring(0, 8)
  const formattedPostal = postalValue.replace(
    /^([\d]{2})([\d]{3})?([\d]{3})?/,
    "$1.$2-$3"
  )
  console.log("Novo formato ", formattedPostal)
  postalCodeUser.value = formattedPostal

  const cep = document.getElementById("postalCode-user").value
  if (cep !== "") {
    const url = "https://brasilapi.com.br/api/cep/v1/" + cep

    const req = new XMLHttpRequest()
    req.open("GET", url)
    req.send()

    req.onload = function () {
      if (req.status === 200) {
        const endereco = JSON.parse(req.response)
        document.getElementById("street-user").value = endereco.street
        document.getElementById("neighborhood-user").value =
          endereco.neighborhood
        document.getElementById("city-user").value = endereco.city
        document.getElementById("state-user").value = endereco.state
        return
      }
      if (req.status === 404) {
        setErrorFor(cep, "CEP inválido")
        return
      }
    }
  }
}

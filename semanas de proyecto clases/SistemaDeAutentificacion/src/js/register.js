// llamar formularios
const form = document.getElementById("register-form");  
// llamar imput

const userName = document.getElementById("username");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

form.addEventListener("submit", async (event) => {
    event.preventDefault()
    const checkPassword = validatePasswors(password, confirmPassword)
    const checkEmail = await validacionEmail(email)

    // guardar usuario
    if (checkPassword === true && checkEmail === true) {
        registrerUser(userName, lastName, email, password)
        window.location.href = "/"
    } else {
        alert("lo sentimos pero alguno de los campos es inscorrecto")
    }
})

// confirmacion de contraseñas
function validatePasswors(password, confirmPassword) {
    if (password.value === confirmPassword.value) {
        return true
    } else {
        return false
    }
}

// validacion que el email no exita
async function validacionEmail(email) {
    // llamamos a todos los campos (con el "?" se llamas los parametros, seguidamente se agrega el parametro)
    const response = await fetch(`http://localhost:3000/users?email=${email.value}`)
    const data = await response.json()

    // validamos que no se repita el email
    if (data.length === 0) {
        return true
    } else {
        return false
    }
}

// guardar usuario
async function registrerUser(userName, lastName, email, password) {
    const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userName: userName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value
        })
    })
    const data = await response.json()
}

// llamar formulario
const form = document.querySelector("form");
// imput
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const user = await validacionEmail(email)
    if (user === null) {
        alert("el personaje no existe")
    } else {    
        if (user.password === password.value) {
            localStorage.setItem("userOnline", JSON.stringify(user))
            window.location.href= "./src/pages/dashboard"
        }
    }
})
// validacion que el email no exita
async function validacionEmail(email) {
    // llamamos a todos los campos (con el "?" se llamas los parametros, seguidamente se agrega el parametro)
    const response = await fetch(`http://localhost:3000/users?email=${email.value}`)
    const data = await response.json()

    // validamos que no se repita el email
    if (data.length === 1) {
        return data[0]
    } else {
        return null
    }
}

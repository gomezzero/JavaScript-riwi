// Import our custom CSS
import "../scss/stayles.scss"
// Import all of Bootstrap"s JS
import * as bootstrap from "bootstrap"
import { coders } from "../../public/data/database.js"
import { coderDelet, coderEditar, create, withForEach } from "./operaciones"
import { showSmallAlertSuccess } from "./alerts.js"

const table = document.querySelector("table")
const tbody = document.querySelector("tbody")

const name = document.querySelector("#name")
const lastName = document.querySelector("#last-name")
const email = document.querySelector("#email")
const form = document.querySelector("form")
let idParaActualizar 

withForEach(coders, tbody)

// crea un escuchador de eventos para mostrar la tabla con los coder y el coder que se agrega
form.addEventListener("submit", function (event) {
    event.preventDefault() // nos previene que se refresque la pagina cuando hacemos clik a guardar 
    // estamos verificando si idParaActualizar tiene algun dato
    if (idParaActualizar === undefined) {
        create(name, lastName, email, coders)
        showSmallAlertSuccess("save")
    } else {
        coderEditar(name, lastName, email, idParaActualizar, coders)
        showSmallAlertSuccess("editado")
        idParaActualizar = undefined
    }
    form.reset()
    withForEach(coders, tbody)
})

table.addEventListener("click", function (event) {
    if (event.target.classList.contains("btn-danger")) {
        const idParaEliminar = event.target.getAttribute("data-id") // estoy accsediendo al id que contiene el boton, proximamente se usara 
        coderDelet(idParaEliminar, coders)
        showSmallAlertSuccess("coder deleted")
        withForEach(coders, tbody)
    }

    if (event.target.classList.contains("btn-warning")) {
        idParaActualizar = event.target.getAttribute("data-id") // estoy accsediendo al id que contiene el boton
        const userFound = coders.find(coder => coder.id == idParaActualizar) // busca al coder y extrae los datos

        // estamos pasando los datos extraidos en userFoud al formulario
        name.value = userFound.name
        lastName.value = userFound.lastName
        email.value = userFound.email


    }
})




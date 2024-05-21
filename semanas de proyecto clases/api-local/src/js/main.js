import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

const urlGeneral = `http://localhost:3000/categories`
const tbody = document.querySelector('tbody')
const form = document.querySelector("form")
const name = document.querySelector("#name")
const image = document.querySelector("#url-image")
let id

index()

form.addEventListener('submit', async (event) => {
    //ACA DEBEMOS LLAMAR A LA FUNCION QUE SE ENCARGA DE GUARDAR}
    // evitar que la pagina se recarge
    event.preventDefault()

    if (id === undefined) {
        await create(name, image) // enviamos los campos a la funcion create
    } else {
        await update(id, name, image) // enviamos los campos a la funcion create
    }

    await index() // con el await mas el async y el index() se recarga la pagina sin nosotros darle a recargar
    form.reset()
})

tbody.addEventListener('click', async function (event) {
    // ACA DEBEMOS LOCALIZAR A LOS ESCUCHADORES DE EVENTOS

    if (event.target.classList.contains("btn-danger")) {

        const id = event.target.getAttribute("data-id") // le sacamos el id al boton rojo
        await deleteItem(id) // enviamos el id a la funcion de eliminar
        await index() // con el await mas el async y el index() se recarga la pagina sin nosotros darle a recargar
    }

    if (event.target.classList.contains("btn-warning")) {
        id = event.target.getAttribute("data-id") // le sacamos el id al boton rojo
        const categoryFound = await find(id) // enviamos el id a la funcion de eliminar
        name.value = categoryFound.name
        image.value = categoryFound.image
    }
})

async function index() {
    const response = await fetch(`${urlGeneral}`) // llamamos a los datos
    const data = await response.json() // convertimos los datos de JSON a JS 

    tbody.innerHTML = "" // limpiamos para que no tengamos problema
    data.forEach(element => { // comenzamos a imprimir las cosas
        tbody.innerHTML += `
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>
                <img width="100px" src=${element.image} alt=${element.name}>
            </td>
            <td>${element.creationAt}</td>
            <td>${element.updatedAt}</td>
            <td>
                <button type="button" data-id=${element.id} class="btn btn-warning">Edit</button>
                <button type="button" data-id=${element.id} class="btn btn-danger">Delete</button>
            </td>
        `
    })
}

async function find(id) {
    //ACA DEBEMOS PROGRAMAR LA PETICION PARA BUSCAR UNA CATEGORIA
    const response = await fetch(`${urlGeneral}/${id}`)
    const data = await response.json() // convertimos los datos de JSON a JS
    return data // retornamos el elemento

}

async function create(name, image) {
    //ACA DEBEMOS PROGRAMAR LA PETICION PARA CREAR UNA CATEGORIA

    // preparamos la nueva categoria para enviar
    const newCategory = {
        name: name.value,
        image: image.value,
    }
    // enviamos la informacionn
    await fetch(`${urlGeneral}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCategory),
        }
    )
}

async function update(id, name, image) {
    //ACA DEBEMOS PROGRAMAR LA PETICION PARA ACTUALIZAR UNA CATEGORIA
    // preparamos la nueva categoria para enviar
    const updateCategory = {
        name: name.value,
        image: image.value,
    }
    // enviamos la informacionn
    await fetch(`${urlGeneral}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateCategory),
    }
    )
    id = undefined
}

async function deleteItem(id) {
    //ACA DEBEMOS PROGRAMAR LA PETICION PARA ELIMINAR UNA CATEGORIA
    await fetch(`${urlGeneral}/${id}`, {
        method: 'DELETE',
    })


}
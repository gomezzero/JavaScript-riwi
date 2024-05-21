

// console.log("uno");
// console.log("dos");
// //si ponemos un alert entre el segundo console.log no seguiran los demas hasta que se complete la accion del alert (o lo que uno le indique)

// // el setTimeout pasa lo que uno le ingrese a segundo plana hasta que se cumpla el tiempo establesido en milisegindos
// setTimeout(() => {
//     alert("hola mundo");
// }, 1000);
// console.log("tres");
// console.log("cuatro");
// console.log("cinco");

// async deja que la funcion pueda ser asincrono (osea que se puede tardar en responder)
async function llamadoAUnaAPI() {
    // fetch es el "mensajero" que va hasta la API y nos trae una respuesta, ademas fetch ya esta por defecto en el ordenador
    // fetch le tenemos que dar la url de la api

    // await permite que el  fetch tenga suficiente tiempo para traer los datos requeridos, ademas va de mano con el async
    const llamado = await fetch("https://api.escuelajs.co/api/v1/categories")  // llamada de datos
    const data = await llamado.json() // transformamos los datos JSON a codigo JS
    tablaAIP(data)
};

llamadoAUnaAPI();

function tablaAIP(data) {
    const tbody = document.querySelector("tbody")

    data.forEach(element => {
        tbody.innerHTML += `
        <tr>
            <th scope="row">${element.id}</th>
            <td>${element.name}</td>
            <td>${element.updatedAt}</td>
            <td><img src="${element.image}" alt="${element.image}" width="100px"></td>
        </tr>        
        `
    });
}

const btnNuewe = document.querySelector("#btn-enviar")

btnNuewe.addEventListener("click", function () {
    eliminar()
})

const nuwCategori = {
    name: "haggard",
    image: "https://i1.wp.com/www.scienceofnoise.net/wp-content/uploads/2020/02/awaking.jpg"
}

function enviarDatosALaAPI() {
    fetch("https://api.escuelajs.co/api/v1/categories", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(nuwCategori)
    })

}

function eliminar() {
    let id = prompt("ingresa el id de la categoria quieres eliminar")
    fetch(`https://api.escuelajs.co/api/v1/categories/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    })
}
/*

GET => Obtener informacion
POST => Enviar informacion
PUT => Actualizar informacion
PACTH => Actualizar un dato puntualmente
DELETE => Para eliminar 

*/
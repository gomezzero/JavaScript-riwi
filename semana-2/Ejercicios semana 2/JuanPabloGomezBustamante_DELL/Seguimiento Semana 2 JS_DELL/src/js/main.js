// Función para calcular la edad de una mascota
function calcularEdad(fechaNacimiento) {
    let fechaActual = new Date()
    let fechaNac = new Date(fechaNacimiento)
    let diferencia = fechaActual.getTime() - fechaNac.getTime()
    let edad = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25))
    return edad
}

// registrar una nueva mascota en el arreglo mascotas
function registrarMascota(nombreMascota, especie, raza, fechaNacimiento, peso, estado, nombrePropietario, documentoPropietario, telefonoPropietario, correoPropietario) {
    let nuevaMascota = {
        dueño: {
            nombre: nombrePropietario,
            documento: documentoPropietario,
            telefono: telefonoPropietario,
            correo: correoPropietario
        },
        nombre: nombreMascota,
        especie: especie,
        raza: raza,
        fechaNacimiento: fechaNacimiento,
        peso: peso,
        estado: estado
    }
    mascotas.push(nuevaMascota)
}

// obtener una lista de todos los nombres de los dueños de las mascotas
function obtenerListaDueños(mascotas) {
    let listaDueños = []
    mascotas.forEach(mascota => {
        listaDueños.push(mascota.dueño.nombre)
    })
    listaDueños = Array.from(new Set(listaDueños))
    return listaDueños
}

// buscar una mascota por su nombre en el arreglo mascotas
function buscarMascotaPorNombre(nombre, mascotas) {
    for (let i = 0; i < mascotas.length; i++) {
        if (mascotas[i].nombre.toLowerCase() === nombre.toLowerCase()) {
            return mascotas[i]
        }
    }
    return null
}

// filtrar y mostrar todas las mascotas pertenecientes a un mismo dueño
function filtrarMascotasPorDueño(nombreDueño, mascotas) {
    let mascotasFiltradas = []
    for (let i = 0; i < mascotas.length; i++) {
        if (mascotas[i].dueño.nombre.toLowerCase() === nombreDueño.toLowerCase()) {
            mascotasFiltradas.push(mascotas[i])
        }
    }
    return mascotasFiltradas
}

// actualizar la información de una mascota
function actualizarMascota(nombreMascota, nuevosDatos, mascotas) {
    let indiceMascota = mascotas.findIndex(mascota => mascota.nombre.toLowerCase() === nombreMascota.toLowerCase())
    if (indiceMascota !== -1) {
        Object.assign(mascotas[indiceMascota], nuevosDatos)
        console.log(`La información de ${nombreMascota} ha sido actualizada.`)
    } else {
        console.log(`No se encontró ninguna mascota con el nombre ${nombreMascota}.`)
    }
}

// eliminar una mascota del arreglo
function eliminarMascota(nombreMascota, mascotas) {
    let indiceMascota = mascotas.findIndex(mascota => mascota.nombre.toLowerCase() === nombreMascota.toLowerCase())
    if (indiceMascota !== -1) {
        mascotas.splice(indiceMascota, 1)
        console.log(`La mascota ${nombreMascota} ha sido eliminada.`)
    } else {
        console.log(`No se encontró ninguna mascota con el nombre ${nombreMascota}.`)
    }
}

// mascotas 
let mascotas = [
    {
        dueño: { nombre: "santiago", documento: "1039843", telefono: "+57 31039843", correo: "tedrf@gmail.com" },
        nombre: "neron", especie: "perro", raza: "rottweiler", fechaNacimiento: "2020-10-12", peso: "20kg", estado: "estable"
    },
    {
        dueño: { nombre: "daniel", documento: "1039843", telefono: "+57 31039843", correo: "tedrf@gmail.com" },
        nombre: "neko", especie: "gato", raza: "misifus", fechaNacimiento: "2015-10-12", peso: "20kg", estado: "critico"
    },
    {
        dueño: { nombre: "camila", documento: "1039843", telefono: "+57 31039843", correo: "tedrf@gmail.com" },
        nombre: "nemo", especie: "pez", raza: "payaso", fechaNacimiento: "2017-10-12", peso: "20kg", estado: "critico"
    },
    {
        dueño: { nombre: "camilo", documento: "1039843", telefono: "+57 31039843", correo: "tedrf@gmail.com" },
        nombre: "lif", especie: "perro", raza: "erty", fechaNacimiento: "2018-10-12", peso: "20kg", estado: "estable"
    },
    {
        dueño: { nombre: "daniela", documento: "1039843", telefono: "+57 31039843", correo: "tedrf@gmail.com" },
        nombre: "log", especie: "perro", raza: "conso", fechaNacimiento: "2019-10-12", peso: "20kg", estado: "critico"
    },
    {
        dueño: { nombre: "victor", documento: "1039843", telefono: "+57 31039843", correo: "tedrf@gmail.com" },
        nombre: "lkh", especie: "gato", raza: "michi", fechaNacimiento: "2022-10-12", peso: "20kg", estado: "estable"
    },
    {
        dueño: { nombre: "luis", documento: "1039843", telefono: "+57 31039843", correo: "tedrf@gmail.com" },
        nombre: "udir", especie: "perro", raza: "dsf", fechaNacimiento: "2023-10-12", peso: "20kg", estado: "critico"
    },
    {
        dueño: { nombre: "santiago", documento: "1039843", telefono: "+57 31039843", correo: "tedrf@gmail.com" },
        nombre: "daar", especie: "perro", raza: "rottweiler", fechaNacimiento: "2020-10-12", peso: "20kg", estado: "estable"
    },
    {
        dueño: { nombre: "manuel", documento: "1039843", telefono: "+57 31039843", correo: "tedrf@gmail.com" },
        nombre: "key", especie: "perro", raza: "pint", fechaNacimiento: "2021-10-12", peso: "20kg", estado: "estable"
    },
    {
        dueño: { nombre: "tatiana", documento: "1039843", telefono: "+57 31039843", correo: "tedrf@gmail.com" },
        nombre: "ka", especie: "perro", raza: "rottweiler", fechaNacimiento: "2020-10-12", peso: "20kg", estado: "estable"
    },
    {
        dueño: { nombre: "lina", documento: "1039843", telefono: "+57 31039843", correo: "tedrf@gmail.com" },
        nombre: "nerloperon", especie: "perro", raza: "dalmata", fechaNacimiento: "2020-10-12", peso: "20kg", estado: "critico"
    },
]

// mostrar el menú de opciones al usuario
function mostrarMenu() {
    alert(`--- Menú ---
1. Calcular la edad de las mascotas
2. Registrar una nueva mascota
3. Ver una lista de todos los dueños
4. Buscar una mascota por nombre
5. Filtrar y mostrar todas las mascotas pertenecientes a un mismo dueño
6. Actualizar la información de una mascota existente
7. Eliminar una mascota del array
8. Ver nombres de todas las mascotas
9. Ver mascota
10. Salir`)
}

// Función principal para iniciar el programa
function iniciar() {
    mostrarMenu()
    let opcion = prompt("Ingrese el número de la opción que desea realizar:")

    switch (opcion) {
        case '1':
            mascotas.forEach(mascota => {
                alert(`${mascota.nombre} tiene ${calcularEdad(mascota.fechaNacimiento)} años.`)
            })
            iniciar()
            break
        case '2':
            let nombreMascota = prompt("Ingrese el nombre de la mascota:")
            let especie = prompt("Ingrese la especie de la mascota:")
            let raza = prompt("Ingrese la raza de la mascota:")
            let fechaNacimiento = prompt("Ingrese la fecha de nacimiento de la mascota (Formato: YYYY-MM-DD):")
            let peso = prompt("Ingrese el peso de la mascota:")
            let estado = prompt("Ingrese el estado de la mascota (estable-critico):")
            let nombrePropietario = prompt("Ingrese el nombre del propietario:")
            let documentoPropietario = prompt("Ingrese el documento del propietario:")
            let telefonoPropietario = prompt("Ingrese el teléfono del propietario:")
            let correoPropietario = prompt("Ingrese el correo del propietario:")

            registrarMascota(nombreMascota, especie, raza, fechaNacimiento, peso, estado, nombrePropietario, documentoPropietario, telefonoPropietario, correoPropietario)
            alert("Mascota registrada exitosamente.")
            iniciar()
            break
        case '3':
            alert(`Lista de todos los dueños:\n${obtenerListaDueños(mascotas).join("\n")}`)
            iniciar()
            break
        case '4':
            let nombreMascotaBuscar = prompt("Ingrese el nombre de la mascota que desea buscar:")
            let mascotaEncontrada = buscarMascotaPorNombre(nombreMascotaBuscar, mascotas)
            if (mascotaEncontrada) {
                alert(`Mascota encontrada:\n${JSON.stringify(mascotaEncontrada)}`)
            } else {
                alert("No se encontró ninguna mascota con ese nombre.")
            }
            iniciar()
            break
        case '5':
            let nombreDueño = prompt("Ingrese el nombre del dueño para filtrar las mascotas:")
            let mascotasDelDueño = filtrarMascotasPorDueño(nombreDueño, mascotas)
            if (mascotasDelDueño.length > 0) {
                let listaMascotasDueño = mascotasDelDueño.map(mascota => mascota.nombre).join("\n")
                alert(`Mascotas de ${nombreDueño}:\n${listaMascotasDueño}`)
            } else {
                alert(`No se encontraron mascotas del dueño ${nombreDueño}.`)
            }
            iniciar()
            break
        case '6':
            let nombreMascotaActualizar = prompt("Ingrese el nombre de la mascota que desea actualizar:")
            let mascotaActualizar = buscarMascotaPorNombre(nombreMascotaActualizar, mascotas)
            if (mascotaActualizar) {
                alert(`Mascota encontrada:\n${JSON.stringify(mascotaActualizar)}`)
                let especieNueva = prompt("Ingrese la nueva especie de la mascota:")
                let razaNueva = prompt("Ingrese la nueva raza de la mascota:")
                let estadoNuevo = prompt("Ingrese el nuevo estado de la mascota:")
                actualizarMascota(nombreMascotaActualizar, { especie: especieNueva, raza: razaNueva, estado: estadoNuevo }, mascotas)
                alert("La información de la mascota ha sido actualizada.")
            } else {
                alert(`No se encontró ninguna mascota con el nombre ${nombreMascotaActualizar}.`)
            }
            iniciar()
            break
        case '7':
            let nombreMascotaEliminar = prompt("Ingrese el nombre de la mascota que desea eliminar:")
            eliminarMascota(nombreMascotaEliminar, mascotas)
            alert(`La mascota ${nombreMascotaEliminar} ha sido eliminada.`)
            iniciar()
            break
        case '8':
            alert(`Nombres de todas las mascotas:\n${mascotas.map(mascota => mascota.nombre).join("\n")}`)
            let opcionNombres = prompt("¿Desea conocer más a fondo una mascota? (si/no):")
            if (opcionNombres.toLowerCase() === 'si') {
                let nombreMascotaVer = prompt("Ingrese el nombre de la mascota que desea ver:")
                let mascotaVer = buscarMascotaPorNombre(nombreMascotaVer, mascotas)
                if (mascotaVer) {
                    alert(`Datos de la mascota ${nombreMascotaVer}:\n
Nombre: ${mascotaVer.nombre}
Especie: ${mascotaVer.especie}
Raza: ${mascotaVer.raza}
Fecha de Nacimiento: ${mascotaVer.fechaNacimiento}
Peso: ${mascotaVer.peso}
Estado: ${mascotaVer.estado}
Dueño:
- Nombre: ${mascotaVer.dueño.nombre}
- Documento: ${mascotaVer.dueño.documento}
- Teléfono: ${mascotaVer.dueño.telefono}
- Correo: ${mascotaVer.dueño.correo}`)
                } else {
                    alert(`No se encontró ninguna mascota con el nombre ${nombreMascotaVer}.`)
                }
            }
            iniciar()
            break
        case '9':
            let nombreMascotaVer = prompt("Ingrese el nombre de la mascota que desea ver:")
            let mascotaVer = buscarMascotaPorNombre(nombreMascotaVer, mascotas)
            if (mascotaVer) {
                alert(`Datos de la mascota ${nombreMascotaVer}:\n
Nombre: ${mascotaVer.nombre}
Especie: ${mascotaVer.especie}
Raza: ${mascotaVer.raza}
Fecha de Nacimiento: ${mascotaVer.fechaNacimiento}
Peso: ${mascotaVer.peso}
Estado: ${mascotaVer.estado}
Dueño:
- Nombre: ${mascotaVer.dueño.nombre}
- Documento: ${mascotaVer.dueño.documento}
- Teléfono: ${mascotaVer.dueño.telefono}
- Correo: ${mascotaVer.dueño.correo}`)
            } else {
                alert(`No se encontró ninguna mascota con el nombre ${nombreMascotaVer}.`)
            }
            iniciar()
            break
        case '10':
            alert("¡Hasta luego!")
            break
        default:
            alert("Opción no válida. Por favor, seleccione una opción válida.")
            iniciar()
    }
}

iniciar()

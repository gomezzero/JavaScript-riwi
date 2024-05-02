console.groupCollapsed("funciones declarativas")

// funcion declarativa
// function saludar(grupo) { 
//     console.info(`Hola ${grupo}, hoy es un nuevo dia`)
// } // grupo es lo que se puede remplasar a la hora de ejecutar la funcion

// // saludar("zero") // lo que esta em los () es en lo que se va a convertir (grupo) tambien se pueden hacer operacones y poner mas de un argumento

// let coders = ["zero", "martin", "mar", "daniel"]

// // let salir = prompt("quieres salir...")
//  let salir = "si"
// function saludar(coder) {
//     console.info(`Hola ${coder}, hoy es un nuevo dia`)

// }
// function despedir(coder) {
//     console.info(`Hasta luego ${coder}`)
// }

// for (let i = 0; i < coders.length; i++) {
//     saludar(coders[i])
//     if (salir == "si") {
//         despedir(coders[i])
//     }
// }

// // en los objetos no se puede tener mas de dos llaves con el mismo nombre, si se quiere agregar otra persona, se le debe crear su propio objeto
// let coders2 = {
//     coder1: "zero", 
//     coder2: "martin",
//     coder3: "mar",
//     coder4: "daniel"
// }

// for (const coder in coders2) {
//   saludar(coders2[coder])
//   if (salir == "si") {
//     despedir(coders2[coder])
//   }
// }

// function sumaDosNumeros(numero1, numero2) {
//     let respuesta = numero1 + numero2
//     return respuesta
// }



// let usuario1 = prompt("Cual es tu nombre de usuario")
// let contraseña = Number(prompt("Cual es tu contraseña"))


// function usuario (usuario, contraseña) {
//     if (usuario === "admin" && contraseña === 1234){
//         console.info(`Bienvenido ${usuario1}`)
//     } else {
//         console.info(`lo sentimos pero no puedes ${usuario1}`)
//         console.info(`Contrseña incorrecta`)
//     }
// }

// usuario(usuario1, contraseña)

console.groupEnd()

console.groupCollapsed("Fechas (New Date() )")


let fecha = new Date()
console.info(fecha)

const juanjoBD = new Date(2005,8,1)
console.info(juanjoBD)

const juanjoBDString = new Date("09/10/2005")
console.info(juanjoBDString)

const dias = fecha.getDate() 
console.info(dias) 

const month = fecha.getMonth() + 1 
console.info(month)

const fullYear = fecha.getFullYear()
console.info(fullYear)

const year = fecha.getYear()
console.info(year)

const diasSemana = fecha.getDay()
console.info(diasSemana)

const hora = fecha.getDay()
console.info(hora)

const minutos = fecha.getDay()
console.info(minutos)

const ms = fecha.getDay()
console.info(ms)

const fechaUsuario = fecha.get

console.groupEnd()
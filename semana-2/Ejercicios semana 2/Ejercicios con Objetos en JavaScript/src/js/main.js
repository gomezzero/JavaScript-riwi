// // 1. Crea un objeto llamado persona con propiedades como
// // nombre, edad y ciudad.
// const persona = {
//     nombre: "john",
//     edad: 25,
//     ciudad: "madrid",
// }

// // 2. Agrega una propiedad adicional al objeto persona que
// // represente su ocupación.
// persona.ocupacion = "estudiante"

// // 3. Accede a una propiedad del objeto persona y muestra su valor
// // en la consola.
// console.log(persona.nombre)

// // 4. Crea otro objeto llamado libro con propiedades como título,
// // autor y año de publicación.
// const libro = {
//     titulo: "la gran mentira",
//     autor: "zero",
//     añoPublicacion: "1956",
// }

// // 5. Combina las propiedades de los objetos persona y libro en un
// // nuevo objeto llamado informacion.
// const informacion = {
//     ...persona,
//     ...libro,
// }

// // 6. Cambia el valor de una propiedad en el objeto persona.
// persona.nombre = "david"


// // 7. Elimina una propiedad del objeto libro.
//  libro.añoPublicacion

// // 8. Crea un objeto llamado coche con propiedades como modelo,
// // marca y año.
// const coche = {
//     modelo: "audi",
//     marca: "a4",
//     año: "2022",
// }

// // 9. Muestra todas las propiedades del objeto coche en la consola.
// console.log(coche)

// // 10.Agrega un método al objeto coche que imprima un mensaje
// // en la consola.
// coche.mensaje = function () {
//     console.log("hola")
// }

// // 11.Crea un objeto llamado circulo con propiedades como radio y
// // color.
// const circulo = {
//     radio: 10,
//     color: "rojo",
// }

// // 12.Calcula el área del círculo utilizando la fórmula A = πr² y
// // muestra el resultado.
// const area = Math.PI * circulo.radio * circulo.radio
// console.log(area)

// // 13.Crea un objeto llamado rectangulo con propiedades como
// // ancho y alto.
// const rectangulo = {
//     ancho: 10,
//     alto: 20,
// }
// console.table(rectangulo)

// // 14.Calcula el perímetro del rectángulo utilizando la fórmula P = 2
// // * (ancho + alto) y muestra el resultado.
// const perimetro = 2 * (rectangulo.ancho + rectangulo.alto)
// console.log(`El perimetro es: ${perimetro}`)

// // 15.Combina las propiedades de los objetos circulo y rectangulo
// // en un nuevo objeto llamado formas.
// const formas = {
//     ...circulo,
//     ...rectangulo
// }

// // 16.Crea un objeto llamado computadora con propiedades como
// // marca, modelo y precio.
// const computadora = {
//     marca: "azus",
//     modelo: "core",
//     precio: "25"
// }

// // 17.Muestra el precio de la computadora en la consola.
// console.log(`El precio de la computadora es: ${computadora.precio}`)

// // 18.Agrega una propiedad al objeto computadora que indique si
// // tiene o no una tarjeta gráfica.
// computadora.tarjetaGrafica = true
// console.log(computadora)

// // 19.Crea un objeto llamado mascota con propiedades como
// // nombre, especie y edad.
// const mascota = {
//     nombre: "perro",
//     especie: "perro2",
//     edad: 2
// }

// // 20.Muestra en la consola la especie de la mascota en
// // mayúsculas.
// console.log(mascota.especie.toUpperCase())

// // 21.Crea un objeto llamado fruta con propiedades como nombre y
// // color.
// const fruta = {
//     nombre: "manzana",
//     color: "rojo"
// }


// // 22.Agrega un método al objeto fruta que imprima un mensaje
// // indicando si la fruta está madura.
// fruta.mensaje = function () {
//     console.log(`la ${fruta.nombre} esta madura`)
// }
// console.info(fruta.mensaje())

// // 23.Crea un objeto llamado estudiante con propiedades como
// // nombre, edad y calificaciones
// const estudiante = {
//     nombre: "John",
//     edad: 20,
//     calificaciones: [1.0, 2.0, 1.0, 5.0, 5.0]
// }

// // 24.Muestra en la consola el promedio de las calificaciones del
// // estudiante.
// let suma = estudiante.calificaciones.reduce((a, b) => a + b)
// let promedio = suma / estudiante.calificaciones.length
// console.log(promedio)



// // 25.Agrega una propiedad al objeto estudiante que indique si ha
// // aprobado o no.
// if (promedio >= 3.0) {
//     console.info(`Felicitaciones aprovaste con ${promedio}`)
// }else {
//     console.info(`Esfuersate mas para la proxima tu promedio fue de ${promedio}`)
// }

// // 26.Crea un objeto llamado bolsa con propiedades como tamaño y
// // color.
// const bolsa = {
//     tamaño: "grande",
//     color: "azul"
// }
// // 27.Muestra en la consola un mensaje que indique la capacidad
// // de la bolsa (tamaño).
// console.log(`El tamaño de la bolsa es ${bolsa.tamaño}`)

// // 28.Agrega un método al objeto bolsa que cambie su color.
// bolsa.color = prompt(`Que color quieres darle a tu bolsa?`)
// console.info(`El color de la bolsa es ${bolsa.color}`)

// // 29.Crea un objeto llamado telefono con propiedades como
// // marca, modelo y sistema operativo.
// const telefono = {
//     marca: "Samsung",
//     modelo: "A52",
//     sistema: "Android"
// }

// // 30.Muestra en la consola un mensaje indicando el sistema
// // operativo del teléfono.
// console.log(`El sistema operativo del telefono es ${telefono.sistema}`)

// // 31.Agrega una propiedad al objeto telefono que represente la
// // cantidad de memoria RAM.
// telefono.ram = 8

// // 32.Crea un objeto llamado animal con propiedades como tipo y
// // sonido.
// const animal = {
//     tipo: "perro",
//     sonido: "guau"
// }

// // 33.Muestra en la consola un mensaje que indique el sonido del
// // animal.
// // console.log(`El sonido del animal es ${animal.sonido}`)

// // 34.Agrega un método al objeto animal que imprima un mensaje
// // indicando su tipo y sonido.
// animal.mensaje = function () {
//     console.log(`El animal es un ${animal.tipo} y su sonido es ${animal.sonido}`)
// }
// console.info(animal.mensaje())

// // 35.Crea un objeto llamado vuelo con propiedades como
// // aerolínea, número de vuelo y hora de salida.
// const vuelo = {
//     aerolinea: "avianca",
//     numeroVuelo: 1234,
//     horaSalida: "10:00"
// }

// // 36.Muestra en la consola un mensaje que indique la aerolínea y
// // el número de vuelo.
// console.log(`El vuelo es de la aerolinea ${vuelo.aerolinea} y el numero de vuelo es ${vuelo.numeroVuelo}`)

// // 37.Agrega una propiedad al objeto vuelo que represente el
// // destino del vuelo.
// vuelo.destino = "mexico"

// // 38.Crea un objeto llamado jugador con propiedades como
// // nombre, equipo y posición.
// const jugador = {
//     nombre: "dani",
//     equipo: "barcelona",
//     posicion: "delantero"
// }

// // 39.Muestra en la consola un mensaje que indique el nombre y el
// // equipo del jugador.
// console.log(`el nombre del jugador es ${jugador.nombre} y el equipo es ${jugador.equipo}`)

// 40.Agrega un método al objeto jugador que imprima un mensaje
// // indicando su posición en el equipo.
// console.info(`la poscción es ${jugador.pos} y el equipo es ${jugador.equipo}`)
console.groupCollapsed("creacion de arrays")

const arrays1 = new Array(4) // [1, 2, 3...]
const arrays2 = Array("a", "b", "c") 
const arrays3 = []

console.info(arrays1)
console.info(arrays2)
console.info(arrays3)

console.groupEnd()
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.groupCollapsed("consulta datos del arrays")


const arrays = [1, 2, 3, 4, 5, "hola", "mundo", true, false, "alpha"] 

console.info(arrays)
console.info(arrays.length) // .length comiensa a contar desde el 1 (lo normal es que fueran 9 si se cuenta desde el 0) el .length comiensa a contar desde el daria 10
console.info(arrays[6]) // [6] forma de estraer un dato del array por medio de su posicion
console.info(arrays.at(6)) // otra forma de sacar elementos con la particularidad de que puedo usar el -1 para sacar el ultimo elemento al contrario de []
console.info(arrays.includes("mundo")) // .includes sirve para saber si un elemento esta dentro del array y retorna true o false, tambien es sencible a las mayusculas
console.info(arrays.indexOf("mundo")) // retorna la posicion del elemento en el array, si no lo encuentra retorna -1, y solo devuelve la primera vez de aparicion


console.groupEnd()
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.groupCollapsed("actualizar elementos del arrays")

console.info(arrays)

arrays[5] = "hello"
console.info(arrays)

arrays[6] = "world" 
console.info(arrays)
// arrays.at[6] = "world" // no se puedecho

arrays[10] = "bravo" // se puede agregar elementos al array pero no se recomienda, ademas se tiene que indicar la pocicion final a la que se agraga
console.info(arrays)

arrays[11] = "charlie" 
console.info(arrays)

arrays.push("delta") // push agrega al final del array
console.info(arrays)

arrays.unshift("1") // unshift agrega al inicio del array
console.info(arrays)

console.groupEnd()
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.groupCollapsed("eliminar elementos del arrays")

console.info(arrays)

arrays.pop() // pop elimina el ultimo elemento del array 
console.info(arrays)

let pocicionEliminada = arrays.pop() // pop elimina el ultimo elemento del array y retorna el objeto
console.info(arrays)
console.info(pocicionEliminada)

arrays.shift() // shift elimina el primer elemento del array y tambien lo guarda 
console.info(arrays)

let pocicionEliminadaShift = arrays.shift()
console.info(pocicionEliminadaShift)

delete arrays[2] // delete elimina el elemento pero no lo elimina del array, solo lo deja como undefined
console.info(arrays)

arrays.splice(1, 1) // 1 es el indice, 1 es la cantidad de elementos a eliminar
console.info(arrays)

console.groupEnd()
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.groupCollapsed("suma de arrays")

let primerosNumeros = [1,2,3,4,5]
let segundoNumeros = [6,7,8,9,10]

console.info(primerosNumeros)
console.info(segundoNumeros)

let semaNumeros = primerosNumeros.concat(segundoNumeros) // concat con una variable ya sea (let, const) une los arrays en uno nuevo y es el equivalente a (...) de los objetos y eso es equivalente a una suma
console.info(semaNumeros)

primerosNumeros.concat(segundoNumeros) // concat une los arrays en el primero que se indico

console.groupEnd()
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.groupCollapsed("listar arrays")

let listaSupermercado = [
    "arroz", 
    "pan",
    "arepa", 
    "aguapamela",
    "huevos",
    "guaro",
    "pescado",
    "cafe",
    "queso",
    "leche",
    "carne"
]

console.info("listaSupermercado con for")
for (let i = 0; i < listaSupermercado.length; i++) {
    console.info(listaSupermercado[i].toUpperCase()) // toUpperCase es para que todo lo que este en mayusculas
}
console.info("")

console.info("listaSupermercado con while")
let i = 0
while (i < listaSupermercado.length) {
    console.info(listaSupermercado[i])
    i++
}
console.info("")

console.info("listaSupermercado con for of")
for (let producto of listaSupermercado) {
    console.info(producto)
}
console.info("")

console.info("listaSupermercado con foreach")
listaSupermercado.forEach(function(producto){
    console.info(producto)
})
console.info("")

// listaSupermercado = listaSupermercado.map(producto => producto.toUpperCase())
// console.info(listaSupermercado)

console.groupEnd()
listaSupermercado = listaSupermercado.map(producto => {
    return producto.toUpperCase()})

console.groupCollapsed("inestigaciones")

.reverse() // invierte el orden de los elementos de un array 

        // Ordena el array numeros en orden descendente.
.sort(((a, b) => b - a))  // ordena los elementos de un array (primer elemento a comparar, El segundo elemento a comparar = El array ordenado.)
.slice() // 
.join() // 
.split() // 1 es el indice, 1 es la cantidad de elementos a eliminar, tambien cirve para separar el arry en nuevos arrys dependiendo de ("") este lo separa en uno nuevo por cada letra y (" ") por cada palabra

console.groupEnd()
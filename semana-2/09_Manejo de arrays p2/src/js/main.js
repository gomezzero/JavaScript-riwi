// MAP -> el map permite retornar elementos a diferincia del for each

console.groupCollapsed("map")

const array1 = ["lucas", "pablo", "ana", "mar"]
const array2 = []

// const array2 =  array1.map(nombre => {
//     return nombre.toUpperCase()
// })


array1.forEach(nombre => {
    array2.push(nombre.toUpperCase())
})

console.log(array1)
console.log(array2)

console.groupEnd()

console.groupCollapsed("Reverse y toRevers")

const alphabet = ["A", "B", "C", "D", "E"]

// alphabet.reverse() // reverse afecta a alphabet
console.info(alphabet)

const alphabetInvertido = alphabet.toReversed() // este no efecta a alphabet si no que crea uno nuevo
console.info(alphabetInvertido)

let alfabetoMilitar = [
    "Alfa", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot",
    "Golf", "Hotel", "India", "Juliett", "Kilo", "Lima",
    "Mike", "November", "Oscar", "Papa", "Quebec", "Romeo",
    "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray",
    "Yankee", "Zulu"
]
console.info(alfabetoMilitar)

const alfabetoMilitarReversa = alfabetoMilitar.toReversed()
console.info(alfabetoMilitarReversa)

alfabetoMilitar.reverse()
console.info(alfabetoMilitar)

console.groupEnd()

console.groupCollapsed("sort")

let nombreCoders = [
    "santiago",
    "narciris",
    "reycon",
    "pablo",
    "carolina",
    "marlon", 
    "brandon",
    "edson",
    "estebam",
    "shyley",
]
// console.table(nombreCoders)

let codersOrdenadas = nombreCoders.toSorted()
// console.table(codersOrdenadas)

// console.table(nombreCoders)

let mercado = [
    "arroz",
    "leche",
    "carne",
    "pan",
    "huevos",
    "queso",
    "cerveza",
    "vino",
    "papa",
    "atun"
]
// console.table(mercado)

let mercadoOrdenado = mercado.toSorted()
// console.table(mercadoOrdenado)

let mercadoreversa = mercado.toSorted().reverse()
// console.table(mercadoreversa)

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// console.info(numeros)


let numerosPares = numeros.filter( pares => {
    return pares % 2 === 0
})
// console.info(numerosPares)

let numerosImpares = numeros.filter( impares => {
    return impares % 2!== 0
})
// console.info(numerosImpares)

let nombresVocales = nombreCoders.filter(nombre => {
    return nombre.startsWith("a") || nombre.startsWith("e") || nombre.startsWith("i") || nombre.startsWith("o") || nombre.startsWith("u")
})
// console.info(nombresVocales)

let nombresAntiVocales = nombreCoders.filter(nombre => {
    return! nombre.startsWith("a") &&! nombre.startsWith("e") &&! nombre.startsWith("i") &&! nombre.startsWith("o") &&! nombre.startsWith("u")
})

// console.info(nombresAntiVocales)

let lista = []
let lista2 = []

let expresion = /^[aeiou]/  // es una exprecion regular, para que sea una exprecion regular se mete en / / y adentro se le agregan las definiciones(aun no vistas) en este caso el ^ es para delimitar que solo se evalue lo que esta en [] los corchetes 
lista = coders.filter(coder => {
    return expresion.test(coder)
})
lista2 = coders.filter(coder => {
    return !expresion.test(coder)
})

console.groupEnd()

console.groupCollapsed("every") // el every hace validaciones dando como respuesta un true o false (mientras uno sea falso todos seran falso (o un and))...

let numerosNaturales = [23, 28, 30, 30, 31, 8, 5, 7]

const respuesta = numerosImpares.every(numero => numero > 0) 
// console.info(respuesta)


const respuesta2 = numerosImpares.some(numero => numero > 0) // este es como el operador (or) y devuleve true o false 
// console.info(respuesta2)


console.groupEnd()
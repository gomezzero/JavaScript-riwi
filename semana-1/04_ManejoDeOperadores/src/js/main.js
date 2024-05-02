// tipos de datos een js

console.group("lista de datos js")

let variable1 = 156
let variable2 = "156"
let variable3 = "hola"
let variable4 = true
let variable5
let variable6 = null
let variable7 = ["hola", "hola", "hola"]
let variable8 = { "hola": "hola", "hola": "hola" }
let variable9 = function name() {

}


console.info("variable 1:", typeof variable1)
console.info("variable 2:", typeof variable2)
console.info("variable 3:", typeof variable3)
console.info("variable 4:", typeof variable4)
console.info("variable 5:", typeof variable5)
console.info("varianle 6:", typeof variable6)
console.info("variable 7:", typeof variable7)
console.info("variable 8:", typeof variable8)
console.info("varianle 9:", typeof variable9)

console.groupEnd()

// #operadores arimetticos

console.group("operadores arimetticos")

let numero1 = 10
let numero2 = 5

let suma = numero1 + numero2
let resta = numero1 - numero2
let multiplicacion = numero1 * numero2
let division = numero1 / numero2
let potencia = numero1 ** numero2
let residuo = numero1 % numero2

console.info("suma:", suma)
console.info("multiplicacion:", multiplicacion)
console.info("resta:", resta)
console.info("division:", division)
console.info("potencia", potencia)
console.info("residuo", residuo)

console.groupEnd()

// operadores de incremento y decremento

console.group("operadores de incremento y decremento")

let numeroQueIncrementa = 10
console.info("numero que incrementa: ", numeroQueIncrementa)

numeroQueIncrementa++
console.info("numero que incrementa: ", numeroQueIncrementa)

numeroQueIncrementa += 2 // mejot hacerlo de esta manera
console.info("numero que incrementa: ", numeroQueIncrementa)


let numeroQueDecender = 100
console.info("numero que incrementa: ", numeroQueIncrementa)

numeroQueIncrementa--
console.info("numero que incrementa: ", numeroQueIncrementa)

numeroQueIncrementa -= 2 // mejot hacerlo de esta manera
console.info("numero que incrementa: ", numeroQueIncrementa)

console.groupEnd()

// #operedores de comparacion

// comparacion de igualdad " == o =="
console.group("comparacion de igualdad")

console.info(5 + 9 == 20) //falso
console.info(5 + 9 == 14) //verdadero
console.info(5 + 9 == "14") //verdadero

console.info(5 + 9 === "14") //falso tiene le tripli = asi que valida tambien el tipo de elemento que es
console.info(5 + 9 === 14) //verdadero

console.info("hola mundo" == "hola mundo") //verdadero
console.info("Hola mundo" == "hola mundo") //falso

let numeroFacruta = "12354"
numeroFacruta = parseInt(numeroFacruta)
console.info(numeroFacruta == 12354) //verdadero
console.info(numeroFacruta === 12354) //verdadero

console.groupEnd()

// compardore de diferencia 

console.group("ompardore de diferencia ")
console.info(3 != 9) //verdadero
console.info(3 != 3) //falso
console.info(3 != "9") //verdadero
console.info(3 !== "9") //verdadero

const contraseña = "123456"
const contraseñaConfirmacion = "123456"

if (contraseña !== contraseñaConfirmacion) {
    console.error("contraseña incorrecta")
} else {
    console.info("usuario registrado")
}

console.groupEnd()

// comparador mayor que

console.group("comparador mayor que")

console.info(8 > 5) //true
console.info(8 > 8) //false
console.info(8 >= 8) //true

console.info(8 < 5) //false
console.info(8 < 8) //false
console.info(8 <= 8) //true


// let edad = 18

// if (edad < 18) {
//     console.error("tienes peligro que los polis")
// } else if (edad >= 18) {
//     console.warn("puedes ingerir alcohol")
// }

console.groupEnd()

// #operadores logicos

console.group("operadores logicos")

// operador AND
//           true  +  true = true
console.info(1 < 5 && 8 > 2) // el && es el operador logico and de python

//           true  +  false = false
console.info(1 < 5 && 8 < 2)

// con solo una de las cosas este mal o false todo lo es false
console.info("usuario" == "admin" && "contrseña" === 1234 && "Rol" == true)

// operador or

//          false   true      false   false = true
console.info(1 > 6 || 5 > 1 || 8 < 2 || 9 > 50) // el || es el operador logico or de python


// mescladas
//                            FALSE                        TRUE                            
//                     false            true          true         true         = true
console.info(("usuario" == "Usuario" && 5 < 2) || ("rol" === "rol" && 6 == "6"))

console.groupEnd()
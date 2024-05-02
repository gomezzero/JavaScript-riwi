// # creacion de numeros

// let numero1 = 45
// console.info(typeof(numero1))

// cantidad maxma y minima que puede hacer js
// console.info(Number.MAX_VALUE)
// console.info(Number.MIN_VALUE)

// #Operaciones matematicas

// const numero1 = 5
// const numero2 = Number("10") // se puede Restar, multiplicar y dividir con un nuemro en "10" perno no sumar 

// console.info(numero1 + numero2)
// console.info(numero1 * numero2)
// console.info(numero1 / numero2)
// console.info(numero1 - numero2)

// let numero1 = Number.parseInt(prompt("ingresa tu numero: "))
// let numero2 = Number.parseFloat(prompt("ingresa tu numero: "))

// console.info(typeof(numero1))
// console.info(typeof(numero2))

// console.info(Number.isInteger(numero1))
// console.info(Number.isInteger(numero2))

// let numero = 411384
// console.info(numero.toString()) //el toString() muestra el numero mas si se le agrega el (2) se pasa a binario

// da el numero en binario esto se usa con el ".toString(2)"
// console.info(numero.toString(2))

// let numeroEjemplo = 5012
// console.info(numeroEjemplo)

// EL toFixed agreganumeros decimales con un maximo de 100 decimales mas al llegar a los 100 decimales se redondea los numeros pueden ser errornios 
// console.info(numeroEjemplo.toFixed(2))
// console.info(numeroEjemplo.toFixed(3))
// console.info(numeroEjemplo.toFixed(100))

// let numeroEjemplo = 45
// console.info(numeroEjemplo)

// console.info(numeroEjemplo.toExponential()) // el toExponential() muestra el numero en exponencial

// const numeroEjemplo = 8888888888888888888888888888888888888
// console.info(numeroEjemplo)

// console.info(numeroEjemplo.toPrecision(2)) // el toPrecision() muestra el numero en precision

// #CLASE Math

// Calcular el promedio con la clase Math  
suma


// console.info(Math.sqrt(144)) Calcular la raíz cuadrada
// console.info(Math.pow(2,200))// mejora utilizar el metodo Math, pow hace la potenciacion
// console.info(Math.sqrt(4))// hace la divicion
// console.info(Math.cbrt(68))// saca el cubo
// console.info(Math.abs(-10))// muestra el valor absoluto
// console.info(Math.min(10,20,30,40,50))// muestra el valor minimo
// console.info(Math.max(10,20,30,40,50))// muestra el valor maximo
// console.info(Math.round(Math.random()*100))// muestra un numero aleatorio entre 0 y 100
// console.info(Math.cos(254)) // muestra el coseno
// console.info(Math.sin(254)) // muestra el seno 
// console.info(Math.tan(254)) // muestra la tangente
// console.info(Math.PI) // muestra el valor de PI 
// console.info(Math.E) // muestra el valor de E 
// Calcular la suma de los primeros 10 números naturales



// let numero = 78

// if (numero > 0) {
//     console.log("es posotovo")
// } else {
//     console.log("es negativo")
// }

// console.info(Math.sign(numero)) // muestra el signo del numero si es pocitiva o negativa y es lo mismo que el if

// console.info(Math.trunc(numero)) // muestra el numero entero sin decimales

// console.info(Math.max(48,55,6,84,56,486,5641,48,798)) // muestra el numero mayor
// console.info(Math.min(48,55,6,84,56,486,5641,48,798)) // muestra el numero menor

// let numero = 3.7
// document.write(numero)
// console.info(Math.round(numero)) // redondea el numero
// console.info(Math.ceil(numero)) // redondea el numero hacia arriba 
// console.info(Math.floor(numero)) // redondea el numero hacia abajo
// console.info(Math.trunc(numero)) // elimina los decimales 

// #random

// let numero = Math.random() * 100 // genera un numero aleatorio entre 0 y 100
// redondear

// let numeroRedondeado = Math.round(Math.random() * 100) // redondea el numero aleatorio de que se encuentra definido en la variable numero
// document.write(numeroRedondeado)

// generar numero random entre diferentes rangos  

// let numero =  Math.round(Math.random() * (100 - 50) + 50) // genera un numero aleatorio entre 50 y 100 
// document.write(numero)


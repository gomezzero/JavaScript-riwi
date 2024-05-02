// Ejercicios con Condicionales en JavaScript

// 1. Verifica si un numero es positivo
// let numero = 25
// if (numero > 0) {
//     console.info("El número es positivo")
// } else {
//     console.info("El número es negativo")
// }

// 2. Verifica si un número es negativo.
// let numero = -62
// if (numero < 0) {
//     console.info("El número es negativo")
// } else {
//     console.info("El número es positivo")
// }

// 3. Comprueba si un el numero es par
// let numero1 = 20  
// if (numero1 % 2 == 0) {
//     console.info("El número es par")
// } else {
//     console.info("El número es impar")
// }

// 4. Comprueba si un número es impar.
// let numero2 = 20
// if (numero2 % 2 != 0) {
//     console.info("El número es impar")
// } else {
//         console.info("El número es par ")
// }

// 5. Determina si un número es múltiplo de 5.
// let numero = 20
// if (numero % 5 == 0) {
//     console.info("El número es múltiplo de 5")
// } else {
//     console.info("El número no es múltiplo de 5")
// }

// 6. Verifica si un número es divisible entre 3.
// let numero = 12
// if (numero % 3 == 0) {
//     console.info("El número es divisible entre 3")
// } else {
//     console.info("El número no es divisible entre 3")
// }

// 7. Determina si un número es mayor que 100.
// let numero = 80
// if (numero >= 100) {
//     console.info("el numero es mayor que 100")
// } else {
//     console.info("el numero es menor de 100")
// }

// 8. Verifica si un número es menor que -50.
// let numero = -80
// if (numero <= -50) {
//     console.info("es menor de -50")
// } else {
//     console.info("el numero es mayor que -50")
// }

// 9. Comprueba si un número está en el rango de 20 a 50.
// let numero = 25
// if (numero >= 20 && numero <=50) {
//     console.info("en el rango de 20 a 50")
// } else {
//     console.info("no esta en el rango de 20 a 50")
// }

// 10. Determina si un número es igual a 0.
// let numero = 0
// if (numero === 0) {
//     console.info("es igual a 0")
// } else {
//     console.info("no es igual a 0")
// }

// 11. Verifica si un número es mayor que -10 y menor que 10.
// let numero = 8
// if (numero >= -10 && numero <=10) {
//     console.info("esta en el rango")
// } else {
//     console.info("no esta en el rango")
// }

// 12. Determina si un número es un año bisiesto
// let añoBisiesto = 2020
// let año = añoBisiesto % 4
// if (año === 0) {
//     console.info("es un año bisiesto")
// } else {
//     console.info("no es un año bisiesto")
// }


// 13. Verifica si una persona es mayor de edad (mayor o igual a 18 años).
// let edad = 18
// if (edad >= 18) {
//     console.info("Eres mayor de edad")
// }else {
//     console.info("Aun eres un niño")
// }

// 14. (no tenia un ejercicio)

// 15. Verifica si un número es un cuadrado perfecto.
// let numero = 16
// let raiz = Math.sqrt(numero)
// let entero = Number.isInteger(raiz)


// if (entero === true) {
//     console.info(`El ${numero} es un cuadrado perfecto`)
// } else {
//     console.info(`El ${numero} no es un cuadrado perfecto`)
// }

// 16. Determina si un numero es un número de la sucesion de Fibonacci
// let numFibonacci = 13
// let isFibonacci = false


// let s1 = Math.sqrt(5 * numFibonacci * numFibonacci + 4)
// let s2 = Math.sqrt(5 * numFibonacci * numFibonacci - 4)


// if (Number.isInteger(s1) || Number.isInteger(s2)) {
//   isFibonacci = true
// }

// if (isFibonacci) {
//   console.info(`${numFibonacci} "es un número de Fibonacci`)
// } else {
//   console.info(`${numFibonacci} no es un número de Fibonacci`)
// }


// 17. Verifica si un número es una potencia de 2.
// let numero = 20

// if (numero % 2 === 0) {
//   console.info(`${numero} es una potencia de 2`)
// } else {
//   console.info(`${numero} no es una potencia de 2`)
// }

// 18. Determina si un número es un palíndromo
// let numero = 181
// let numeroString = numero.toString()
// let numeroInvertido = numeroString.split('').reverse().join('')
// if (numeroString === numeroInvertido) {
//   console.info(`${numero} es un palíndromo`)
// } else {
//   console.info(`${numero} no es un palíndromo`)
// }



// 19. Verifica si una cadena de texto contiene la palabra "JavaScript".
// let cadena = "JavaScript es ta interesante"
// if (cadena.includes("JavaScript")) {
//   console.info("La cadena contiene la palabra JavaScript")
// } else {
//   console.info("La cadena no contiene la palabra JavaScript")
// }

// 20. Determina si una cadena tiene más de 11 caracteres
// let cadena = "JavaScript es ta interesante, tiene funciones interesantes"
// if (cadena.length > 10) {
//   console.info("La cadena tiene más de 11 caracteres")
// } else {
//   console.info("La cadena no tiene más de 11 caracteres")
// }


// 21. Verifica si una cadena de texto está en minúsculas
// let cadena = "javascript es ta interesante, tiene funciones interesantes"
// let cadenaEnMinuscula = cadena.toLowerCase()

// if (cadena === cadenaEnMinuscula) {
//     console.info("la cadena esta en minuscula")
// }else{
//     console.info("la cadena no esta en minuscula")
// }

// 22. Determina si una cadena de texto contiene al menos un número.
// const cadena = "javascript es ta interesante, tiene funciones 2 interesantes";
// let contieneNumero = false;

// for (let i = 0; i < cadena.length; i++) {
//   if (!isNaN(parseInt(cadena[i]))) {
//     contieneNumero = true

//   }
// }

// if (contieneNumero == true) {
//     console.info("La cadena contiene al menos un número.");
//   } else {
//     console.info("La cadena no contiene ningún número.");
//   }

// 23. Verifica si una cadena de texto termina con un punto (.).
// const cadena = "javascript es interesante."
// let contienePunto = false

// for (let i = 0; i < cadena.length; i++) {
//   if (cadena[i] === '.') {
//     contienePunto = true
//     break
//   }
// }

// if (contienePunto) {
//   console.info("La cadena contiene al menos un punto (.)")
// } else {
//   console.info("La cadena no contiene ningún punto (.)")
// }

// 24. Determina si una cadena de texto es un pangrama (contiene todas
// las letras del alfabeto).

// 25. Verifica si un día de la semana es laborable (de lunes a viernes)
// let dias = ["lunes", "martes", "miercoles", "jueves", "viernes"]
// let dia = "lunes"

// if (dias.includes(dia)) {
//   console.info("El día es laborable.")
// } else {
//   console.info("El día no es laborable.")
// }


// 26. Determina si un día es fin de semana (sábado o domingo).
// let dias = ["domingo", "sabado"]
// let dia = "domingo"

// if (dias.includes(dia)) {
//   console.info(`${dia} es fin de semana`)
// } else {
//   console.info("aun estas en semana")
// }

// 27. Verifica si un número representa un mes válido (del 1 al 12).
// let meses = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
// let mes = "12"

// if (meses.includes(mes)) {
//   console.info(`${mes} es un mes valido`)
// } else {
//   console.info("no es un mes valido")
// }

// 28. Determina si una hora está en el rango de 9 AM a 6 PM
// let hora = 12
// if (hora >= 9 && hora <= 18) {
//   console.info("la hora esta en el rango de 9 a 6")
// } else {
//   console.info("la hora no esta en el rango de 9 a 6")
// }

// 29. Verifica si una persona es mayor de 65 años o menor de 18 años.
// let edad = 65
// if (edad >= 65) {
//   console.info("Eres un señor")
// } else if (edad < 18) {
//     console.info("Eres un niño")
// } else if (edad >= 18 && edad <= 30) {
//     console.info("Eres un joven")
// } else if (edad >= 31 && edad <= 64){
//     console.info("Ya estas entrando en empesando la mayoria de edad")
// } else {
//     console.info("edad invalida")
// }

// 30. Determina si un triángulo es equilátero (tres lados iguales).
// let lado1 = 10
// let lado2 = 10
// let lado3 = 10

// if (lado1 === lado2 && lado3 === lado2) {
//     console.info("Es un triángulo es equilátero")    
// } else {
//     console.info("No es un triángulo es equilátero")    
// }

// 31. Verifica si un triángulo es isósceles (dos lados iguales).
// let lado1 = 10
// let lado2 = 10
// let lado3 = 20

// if (lado1 === lado2 || lado3 === lado2) {
//     console.info("Es un triángulo es isósceles")    
// } else {
//     console.info("No es un triángulo es isósceles")    
// }

// 32. Determina si un triángulo es escaleno (todos los lados diferentes).
// let lado1 = 10
// let lado2 = 18
// let lado3 = 12

// if (lado1 === lado2 && lado3 === lado2) {
//     console.info("No es un triángulo es escaleno")    
// } else {
//     console.info("Es un triángulo es escaleno")    
// }

// 33. Verifica si un número es mayor que el doble de otro número.
// let numero = 67
// let doble = Math.pow(6, 2)
// if (numero > doble) {
//     console.info(`Es mayor que ${doble}`)
// } else {
//     console.info(`No es mayor que ${doble}`)
// }

// 34. Determina si la suma de dos números es mayor que 100.
// let suma = 67 + 67
// if (suma > 100) {
//     console.info(`Es mayor que 100`)
// } else {
//     console.info(`No es mayor que 100`)
// }

// 35. Verifica si la resta de dos números es menor que 50.
// let suma = 67 - 62
// if (suma < 50) {
//     console.info(`Es menor que 50`)
// } else {
//     console.info(`No es mayor que 500`)
// }

// 36. Determina si un número es el doble del otro número
// let numero1 = 12
// let numero2 = 6

// if (numero1 ===  numero2 * 2) {
//     console.info("El número es el doble del otro número")
// } else {
//     console.info("El número no es el doble")
// }

// 37. Verifica si el doble de un número es igual al triple de otro número.
// let numero1 = 18
// let numero2 = 6

// if (numero1 ===  numero2 * 3) {
//     console.info("El número es el triple del otro número")
// } else {
//     console.info("El número no es el doble")
// }

// 38. Determina si la suma de dos números es igual a 50.
// let suma = 20 + 30

// if (suma === 50) {
//     console.info("La suma es igual a 50")
// } else {
//     console.info("La suma no es igual a 50")
// }

// 39. Verifica si el producto de dos números es mayor que 500.
// let multiplicacion = 200 * 5

// if (multiplicacion > 500) {
//     console.info(`El producto es mayor que 500`)
// } else {
//     console.info(`El producto no es mayor que 500`)
// }

// 40. Determina si la división de dos números es menor que 10.
// let numero1 = 50
// let numero2 = 5

// let dividir = numero1 / numero2

// if (dividir <= 10) {
//     console.info("la divicion de los dos numeros es menor que 10")
// } else {
//     console.info("la divicion de los dos numeros es mayor que 10")
// }
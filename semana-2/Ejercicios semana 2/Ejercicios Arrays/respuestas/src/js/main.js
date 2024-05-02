// 1. Crea un array llamado frutas que contenga al menos 5 nombres de frutas diferentes.
const frutas = [
"manzana",
"pera",
"banana",
"naranja",
"uva"
]

// 2. Utiliza un bucle for para recorrer el array frutas e imprimir cada elemento en la consola.
// for (let i = 0; i < frutas.length; i++) {
//     console.info(frutas[i])
// }

// 3. Utiliza un foreach para recorrer el array frutas e imprimir cada fruta en mayúscula en la
// consola.
// frutas.forEach(fruta => {
//     console.info(fruta.toUpperCase())
// })

// 4. Crea un array llamado números que contenga los números del 1 al 10.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 5. Utiliza un bucle while para recorrer el array numeros e imprimir cada elemento en la
// consola.
// let i = 0
// while (i < numeros.length) {
//     console.info(numeros[i])
//     i++
// }

// 6. Agrega una nueva fruta al final del array frutas.
// frutas.push("melon")

// 7. Elimina el segundo elemento del array números
// numeros.splice(1, 1) // 1 es el indice, 1 es la cantidad de elementos a eliminar
// console.info(numeros)

// 8. Invierte el orden de los elementos en el array frutas.
// console.info(frutas.reverse())

// 9. Ordena el array numeros en orden descendente.
// console.info(numeros.sort((a, b) => b - a))

// 10. Crea una función llamada buscarFruta que tome como argumento una fruta y devuelva
// true si esa fruta está en el array frutas, y false en caso contrario
// const buscarFruta = (fruta) => {
//     if (frutas.includes(fruta)) {
//         return true
//     } else {
//         return false
//     }
// }
// console.info(buscarFruta(prompt("que fruta quires buscar")))

// 11. Imprime en la consola el primer elemento del array frutas.
// console.info(frutas[0])

// 12. Imprime en la consola el último elemento del array numeros.
// console.info(frutas.at(-1))

// 13. Utiliza el método forEach para imprimir cada fruta pero convertida a array
// frutas.forEach(fruta => console.info(fruta.split(" ")))

// 14. Utiliza un bucle for of para imprimir cada número del array numeros en la consola.
// for (const numero of numeros) {
//     console.info(numero)
// }

// 15. Crea un nuevo array llamado duplicados que contenga el doble de cada número en el array
// numeros utilizando el método map
// const duplicados = numeros.map(numero => numero * 2)
// console.info(duplicados)

// 16. Crea dos arrays llamados array1 y array2, cada uno con al menos 3 números.
// const array1 = [1, 5, 6]
// const array2 = [2, 3, 4]

// 17. Calcula la suma de los elementos de array1 y array2 por separado y muestra los resultados
// en la consola.
// let suma1 
// let suma2 

// for (const numero of array1) {
//     suma1 = numero + numero
// }
// for (const numero of array2) {
//     suma2 = numero + numero
// }

// console.info(suma1)
// console.info(suma2)

// 18. Crea una función llamada buscarNumero que tome como argumentos un número y un
// array de números, y devuelva true si el número está en el array, y false en caso contrario.
// const buscarFruta = (numero) => {
//         if (numeros.includes(numero)) {
//             return true
//         } else {
//             return false
//         }
//     }
// console.info(buscarFruta(parseInt(prompt("que numero quires buscar"))))
    
// 19. Crea un array llamado edades que contenga al menos 5 números (edades).
const edades = [60, 25, 30, 40, 50, 5, 10]

// 20. Filtra el array edades para obtener un nuevo array llamado mayoresDeEdad que contenga
// solo las edades mayores o iguales a 18.
//  let mayoresDeEdad = []
// for (let i = 0; i < edades.length; i++) {
//     if (edades[i] >= 18) {
//         mayoresDeEdad.push(edades[i])
//     } else {
//         break
//     }
// }

// 21. Crea un array llamado precios que contenga al menos 3 números (precios de productos).
const precios = [100, 200, 300]

// 22. Utiliza el método map para crear un nuevo array llamado preciosConIVA que contenga los
// precios con un 21% de IVA aplicado a cada uno.
// let preciosConIVA = precios.map(iva => iva *1.21)
// console.info(preciosConIVA)

// 23. Crea un array llamado duplicados que contenga algunos números duplicados.
let duplicados = [1, 2, 2, 5, 6, 5, 7]
let duplicados2 =[]

// 24. Elimina los elementos duplicados del array duplicados y muestra el nuevo array sin
// duplicados en la consola sin usar splice
// 25. Crea dos arrays llamados array1 y array2, cada uno con al menos 3 nombres.
// 26. Concatena los dos arrays en uno nuevo llamado concatenado y muestra el resultado en la
// consola.
// 27. Crea un array llamado colores que contenga al menos 5 colores diferentes.
// 28. Cuenta cuántos elementos tiene el array colores y muestra el resultado en la consola.
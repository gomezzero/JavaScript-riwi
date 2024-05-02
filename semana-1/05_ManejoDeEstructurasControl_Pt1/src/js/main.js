// #if, else, if else

// if
// let hora = 13

// if (hora > 8 && hora < 17) {
//     console.info("aun tengo que trabajar")
// } 


// if, else

// let hora = 13

// if (hora > 8 && hora < 17) {
//     console.info("aun tengo que trabajar")
// } else {
//     console.info("libre")
// }

// if else

// let mes = prompt("En que mes estas")

// if (mes == "enero") {
//     console.info("que comiences bien el año")
// } else if (mes == "febrero") {
//     console.info("buenas febrero")
// } else if (mes == "marzo") {
//     console.info("buenas marzo")
// } else if (mes == "abril") {
//     console.info("buenas abril")
// } else {
//     console.info("no lo entiendo")
// }

// let mesTrimestre = prompt("En que mes estas, escribe el numero")

// if (mesTrimestre == 1 || mesTrimestre == 2 || mesTrimestre == 3) {
//     document.write(`que comiences bien el año estas en ${mesTrimestre}`)
// } 
// else if (mesTrimestre == 4 || mesTrimestre == 5 || mesTrimestre == 6) {
//     document.write(`ya estas en el segundo trimestre y estas en ${mesTrimestre}`)
// } 
// else if (mesTrimestre == 7 || mesTrimestre == 8 || mesTrimestre == 9) {
//     document.write(`ya estas en el tercer trimestre y estas en ${mesTrimestre}`)
// } 
// else if (mesTrimestre == 10 || mesTrimestre == 11 || mesTrimestre == 12) {
//     document.write(`ya estas por el final y estas en ${mesTrimestre}`)
// } 
// else {
//  document.write(`no es un mes valido`)
// }

// switch (mesTrimestre) {
//     case 1:
//         document.write(`que comiences bien el año estas en ${mesTrimestre}`)
//         break;
//     case 2:
//         document.write(`que comiences bien el año estas en ${mesTrimestre}`)
//         break;
//     case 3:
//         document.write(`que comiences bien el año estas en ${mesTrimestre}`)
//         break;
//     default:
//         document.write(`no es un mes valido`)
//         break;
// }

// let money =  parseInt(prompt("cuanto dinero rienes en tu cartera"))
// let menu = parseInt(prompt(`
//                 Menu restaurante

//             1) solicitar almuerzo
//             2) solicitar domicilio 
//             3) cancelar orden
//             4) finalizar programan
// `))

// Opcion de else if
// if (menu == 1 && money >= 20) {
//     console.info("ya te traemos el almuerzo")
// } 
// else if (menu == 2 && money >= 40) {
//     console.info("dinos la direccion")

// } 
// else if (menu == 3){
//     console.info("entendido, quieres algo mas")
// } 
// else if (menu == 4){
//     console.info("adios")
// } else {
//     console.info("no es una opcopn valida")
// }

// // opcion con switch
// switch (menu) {
//     case 1:
//         if (money >= 20) {
//             console.info("con gusto te atendemos")
//         } else {
//             console.info("no tienes dinero suficiente")
//         }
//         console.info("ya te traemos el almuerzo")
//         break;
//     case 2:
//         if (money >= 50) {
//             console.info("con gusto te atendemos")
//         } else {
//             console.info("no tienes dinero suficiente")
//         }
//         console.info("dinos la direccion")
//         break;
//     case 3:
//         console.info("entendido, quieres algo mas")
//         break;
//     case 4:
//         console.info("adios")
//         break;
//     default:
//         console.info("no es una opcopn valida")
//         break;
// }

// #bucles

// let nombre = "zero"

// for (let i = 0; i < 10; i++) {
//     console.info(i, nombre)
// }

// let tabla1 = 1

// for (let i = 1; i <= 10; i++) {
//     console.info(`
//                                                  Tabla del ${i}`)
//     console.table( 1 * i)
//     console.table( 2 * i)
//     console.table( 3 * i)
//     console.table( 4 * i)
//     console.table( 5 * i)
//     console.table( 6 * i)
//     console.table( 7 * i)
//     console.table( 8 * i)
//     console.table( 9 * i)
//     console.table( 10 * i)
// }

// // tabla del 9 con while
// let tabla = 9
// let i = 1
// while (i <= 10) {
//     console.info(tabla * i)
//     i++
// }

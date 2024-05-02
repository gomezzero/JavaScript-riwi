const frutas = ["manzana", " mandarina", " pera", " lima"]
let citricas =  (`las citricas son: ${frutas [1]} y ${frutas [3]}`)
let noCitricas = (`las no citricas son: ${frutas [0]} y ${frutas [2]}`)

console.log(`las frutas son: ${frutas}`)
console.table(noCitricas)
console.table(citricas)


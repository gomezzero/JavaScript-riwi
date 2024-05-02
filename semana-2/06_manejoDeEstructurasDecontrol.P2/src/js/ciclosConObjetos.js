const teamLeader = {
    id: "115551", // identificacion de la empresa
    identificationNumber: "1023485967", // identificacion personal
    name: "javier",
    lastName: "perez",
    birthDate: new Date("1998-04-23 14:00:00"),
    phoneNumber: "(+57) 3136954017",
    email: "javier@gmail.com",
}
console.groupCollapsed("Team leader")

for (const key in teamLeader) {
    console.info(teamLeader[key])
}


console.info(Object.keys(teamLeader))


Object.keys(teamLeader).forEach(index => {
    console.info(teamLeader[index])
})
console.groupEnd()

console.groupCollapsed("Numeros")
// opten los numeros del 0 al 100 y separa los pares 
let numeros = []
let numerosPares = []
let numerosInpares = []

for (let i = 0; i <= 100; i++) {
    numeros.push(i)
}

numeros.forEach(element => {
    // depuracion de pares
    if (element % 2 === 0) {
        numerosPares.push(element)
    }
    // depuracion de inpares
    if (element % 2 != 0) {
        numerosInpares.push(element)
    }
})

console.info(numeros)
console.info(`los numeros pares son: ${numerosPares}`)
console.info(`los numeros inpares son: ${numerosInpares}`)

console.groupEnd()


console.groupCollapsed("Empleados")

listaEmpleados = [
    {
        nombre: "Juan Pérez",
        edad: 30,
        puesto: "Desarrollador de Software",
        salario: 50000
    },
    {
        nombre: "María García",
        edad: 28,
        puesto: "Diseñadora Gráfica",
        salario: 45000
    },
    {
        nombre: "Luis Ramírez",
        edad: 35,
        puesto: "Gerente de Proyectos",
        salario: 60000
    },
    {
        nombre: "Ana Martínez",
        edad: 32,
        puesto: "Analista de Negocios",
        salario: 55000
    }
]

listaEmpleados.forEach(empleado => {
    console.info(`Empleado ${empleado.nombre.toLowerCase()} con la edad ${empleado.edad} y el puesto de ${empleado.puesto.toLowerCase()} solicitado en recursos umanos tienen un salario de ${empleado.salario.toLocaleString('es-ES', {style: 'currency', currency: 'EUR'})}`)
});

console.groupEnd()

// Map 

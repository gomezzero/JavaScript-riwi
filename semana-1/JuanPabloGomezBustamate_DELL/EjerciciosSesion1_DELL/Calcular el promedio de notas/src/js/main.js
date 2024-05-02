let arreglo = [5.0, 2.5, 4.0, 3.0, 2.0];
let suma = 0;

for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
}

let promedio = suma / arreglo.length;

if (promedio > 3.0) {
    console.info(`Aprobaste. Tus notas son: ${arreglo} y tu promedio fue de ${promedio}`);
} else {
    console.error(`No aprobaste. Tus notas son: ${arreglo} y tu promedio fue de ${promedio}`);
}

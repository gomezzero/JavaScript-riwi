// // 1. if-else con uso de operadores de comparación, Operadores de asignación con
// // Resta y asignación, y algún método de string:
// // Enunciado del Problema: Crea un programa que tome dos números del usuario y
// // utilice una estructura de control if-else para determinar si el primer número es
// // mayor que el segundo. Si es así, resta el segundo número al primero y muestra el
// // resultado en consola. Además, utiliza algún método de string para indicar si el
// // resultado es un número positivo o negativo.


let numero1 = parseInt(prompt("Ingrese el primer numero"))
let numero2 = parseInt(prompt("Ingrese el segundo numero"))

const signo =(resta) => {
    if (resta >= 0) {
        return("positivo")
    }else {
        return("negativo")
    }
} 

if (numero1 > numero2) {
    let resta = numero1 - numero2
    let  determinador = signo(resta)

    console.info(`El resultado de la resta es ${resta} y su signo es ${determinador}`)
} else {
    console.log("El primer numero no es mayor que el segundo")
}



// 2. switch case con uso de operadores de comparación, Método Math y
// Number.parseFloat(text):
// Enunciado del Problema: Desarrolla un programa que solicite al usuario
// seleccionar una operación matemática (suma, resta, multiplicación o división)
// mediante un menú. Utiliza un switch case para realizar la operación seleccionada
// en dos números ingresados por el usuario. Además, utiliza el método Math para
// redondear el resultado y conviértelo a un número decimal utilizando
// Number.parseFloat(text) antes de mostrarlo en consola.

let opciones = parseInt(prompt(`Hola, que operacion quieres hacer:
                                [1] Suma
                                [2] Resta
                                [3] Multiplicacion
                                [4] Divicion`))

switch (opciones) {
    case 1: const suma = numero1 + numero2
            const redondiar = parseFloat(Math.round(suma))


            console.info(`El resultado de la suma es ${suma}`)
            console.info(`El resultado de la suma redondiado ${redondiar}`)
        break;

    default:
        break;
}

// 3. for con uso de operadores de comparación, Método Math y toString:
// Enunciado del Problema: Implementa un programa que solicite al usuario un
// número y utilice un bucle for para imprimir la tabla de multiplicar de ese número
// del 1 al 10. Además, utiliza el método Math para calcular cada producto y
// convierte el resultado a una cadena de texto utilizando toString antes de
// mostrarlo en consola.

// 4. if-else con uso de operadores lógicos y Método Math:
// Enunciado del Problema: Crea un programa que pida al usuario su edad y la
// cantidad de horas de sueño diarias. Utiliza una estructura de control if-else con
// operadores lógicos para determinar si la persona es mayor de edad (más de 18
// años) y si duerme lo suficiente (más de 7 horas). Utiliza el Método Math para
// redondear la cantidad de horas de sueño y muestra un mensaje en consola
// indicando si la persona tiene un buen equilibrio entre edad y descanso.

// 5. switch case con uso de operadores lógicos, substring y slice:
// Enunciado del Problema: Desarrolla un programa que solicite al usuario un día de
// la semana (por ejemplo, "lunes"). Utiliza un switch case con operadores lógicos
// para determinar si el día ingresado es un día laboral (de lunes a viernes) o un fin
// de semana (sábado o domingo). Luego, utiliza los métodos substring y slice de
// string para mostrar un mensaje en consola indicando si es un día hábil o de
// descanso.

// 6. for con uso de operadores lógicos y Método Math:
// Enunciado del Problema: Implementa un programa que solicite al usuario ingresar
// un número. Utiliza un bucle for para encontrar la suma de todos los números
// impares hasta el número ingresado. Además, utiliza operadores lógicos para
// identificar números impares y el Método Math para realizar cálculos. Muestra el
// resultado en consola.

// 7. if-else con uso de operadores de asignación, Método Math y
// Number.parseInt:
// Enunciado del Problema: Crea un programa que solicite al usuario ingresar un
// número decimal. Utiliza una estructura if-else con operadores de asignación para
// redondear el número hacia abajo utilizando el método Math.floor() y luego
// convierte el resultado a un número entero utilizando Number.parseInt. Muestra
// el número original y el número redondeado en consola.

// 8. switch case con uso de operadores de asignación, replacing y
// Number.parseInt:
// Enunciado del Problema: Desarrolla un programa que pida al usuario una frase y
// utilice un switch case para realizar diferentes operaciones en la frase.
// Dependiendo de la opción seleccionada (por ejemplo, 1 para convertir a
// mayúsculas, 2 para reemplazar espacios con guiones, etc.), realiza la operación
// correspondiente y muestra el resultado en consola. Utiliza Number.parseInt para
// manejar las opciones ingresadas por el usuario.

// 9. for loop con uso de operadores de asignación ToUpperCase - ToLowerCase:
// Enunciado del Problema: Implementa un programa que solicite al usuario ingresar
// una palabra. Utiliza un bucle for para alternar entre caracteres en mayúsculas y
// minúsculas en la palabra. Utiliza operadores de asignación como toUpperCase() y
// toLowerCase() para cambiar el caso de cada caracter en cada iteración del bucle.
// Muestra el resultado en consola.
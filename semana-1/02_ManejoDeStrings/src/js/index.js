// #DECLARACIOND E STRINGS


// nos centramos solo en la opcion 1 en este caso para el resto del curso

const option1= "hola mundo"
console.info(option1)

// opciones adicionales

const option2= String("hola mundo")
 console.info(option2)

const option3= new String("hola mundo")
 console.info(option3)

 mayuscula


// #Extraccion de datos

const menssage = "Este es un mensaje para pruebas"
document.write(menssage)

// extecion la cantidad de careacteres
console.info(menssage.length)  // .length es una forma de estraer la cantidad de caracteres de ...

// extraer un caractier (ambos son validos)
console.info(menssage[1])
console.info(menssage.charAt(1))

// busca directamente la palabra y me da su pocision    
console.info(menssage.search("mensaje"))

// busca directamente de la palabra y me da true o fals de pendiendo si esta 
console.info(menssage.includes("mensaje"))

// busca por palabras claves en el inicio del texto
console.info(menssage.startsWith("Este"))

// busca por palabras claves en el final del texto
console.info(menssage.endsWith("pruebas"))

// #interpolacion con cadenas, concatenacion

// formas de concatenar en este caso y lo mas recomendable es hacerlo como la opcion tres (3)
const messageOne = "este es un mensaje para"
const messageTwoe = "practicar concatenacion"


console.info(messageOne)
console.info(messageTwoe)



console.info("opcion 1(+):" + " " + messageOne + " " + messageTwoe)
console.info("opcion 2(,):", messageOne, messageTwoe)
console.info(`opcion 3(\`): ${messageOne} ${messageTwoe} `)
console.info("option 4 concat()", messageOne.concat(" ",messageTwoe) )


// componente js y html es recomendable cuando algo como el "footer" se repite en varias paginas, con este metodo se pueden modificar todas desde la costante "header"

const fullName = "Zero"
const header = `
<header>
    <h1>Hola, mi nombre es ${fullName}</h1>
</header>

`
document.write(header)

// #Depuracion de srings

const message3 = "HoLa ComO EsTa"
document.write(message3)

// pasar todo el texto a minuscula
console.info(message3.toLowerCase())

// pasar todo el texto a mayuscula
console.info(message3.toUpperCase())

// limpieza de espacios

const menssage4 = `         gomezjuanzero@gmail.com       `

console.info(menssage4)

// quita los espacios al comienzo
console.info(menssage4.trimStart())

// quita los espacios al final
console.info(menssage4.trimEnd())

// quita todos los espacios
console.info(menssage4.trim())

// #fragmentacion de un string

const message5 = "anita lava la tina porque se porto mal"
document.write(message5)

// busca por la pocicion del opjeto 
console.info(message5.substring(9))
console.info(message5.substring(0,10))

// busca por la pocicion del opjeto mas ademas esta se puede usar con listas
console.info(message5.slice(9))
console.info(message5.slice(0,10))


// remplasa la primera concidencia que encuentra (teniendo en cuenta que la primera es la que se pide y la segunda porque se removeEventListenermplasa)
console.info(message5.replace("a" , "e"))

// remplasa todas las concidencias encontradas
console.info(message5.replaceAll("a" , "e"))
console.info(message5.replaceAll(/[aeiou]/g,"p"))

// #Relleno de string

const menssage6 = "Riwi"
document.write(menssage6)

// repite el valor
console.info(menssage6.repeat(5))

// rellena con algo la contidad de veces especificadas al inicio
console.info(menssage6.padStart(10, "*"))

// rellena con algo la contidad de veces especificadas al finla
console.info(menssage6.padEnd(10, "*"))

// #Destruccion total

const menssage7 = "En riwi todos somos una familia"
document.write(menssage7)

// separa por cada letra y crea una lista
console.info(menssage7.split(""))

// separa por cada espacio (tambien puede dividirlo con el caracter especificado (tambien con esprecion regulares)) y crea una lista
console.table(menssage7.split(" "))

// separa por cada espacio y crea una lista ademas en la lista solo mustra hasta el numero especificado en este caso (5)
console.table(menssage7.split(" ", 5))




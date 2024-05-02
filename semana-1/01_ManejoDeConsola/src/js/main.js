// no uses var (prohibido)
// las variablas se llaman primero por minuscula y si tiene mas de dos palabras la segunda se escribe con mayuscula
// apartir del momento el codigo se escribe en ingles

let userName = prompt("enter your username")
let lastName = prompt("enter your last name")  // let se puede sobre escribir despues de ser utilizada
const age = Number (prompt("enter your ege"))     // const no se puede sobre escribir despues de ser utilizadam se tiene que modificar desde la fuente
// if (age !==Number) {

//     console.error("not number")
//     alert("not number")
    
// }
// const email = prompt("enter yout email")
// let phoneNumber = prompt("enter your Phon Number")
// let address = prompt("enter your address") //address es direccion en español 




// consol mthods
// console.log(userName)
// console.info(lastName)
// console.warn(age)
// console.error(email)
// console.debug(phoneNumber)
// console.log(`%c${address}`, "background-color: black; border-radius: 20px; color: red")


// console.info("Ful name: " + userName + " " + lastName)
// console.info("Ful name:", userName, lastName)
// console.info(`Ful name: ${userName} ${lastName}`)

// console.info("Ful name: " + userName + " " + lastName + " " + age + " " + email + " " + phoneNumber + " " + address)
// console.info("Ful name:", userName, lastName, age, email, phoneNumber, address)
// console.info(`Ful name: ${userName} ${lastName} ${age} ${email} ${phoneNumber} ${address}`)


// Swal.fire({
//   title: "Not",
//   text: address,
//   icon: "question"
// });


console.group("data basic")
    console.info(userName)
    console.info(lastName)
    console.info(age)
console.groupEnd()

console.group("data contac")
    console.info(email)
    console.info(phoneNumber)
    console.info(address)
console.groupEnd()

const coders = ["Lupe", "Mateo", "Maria"]
console.info(coders)
console.table(coders)
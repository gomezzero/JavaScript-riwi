const coder = {
    id: "c4510",
    name: "zero",
    lastName: "ingel",
    bithDate: new Date("1000-12-12 14:00:00"),
    indentificationNumber: "1059697487",
    location: {
        city: "medellin",
        country: "colombia",
        state: "antioquia",
        addres: "cl 14 # 58-43",
    },
    email: "gomezjuanpa15@gmail.com",
    clan: "dell",
    phoneNumber: "312657487",
    codebtor: "tatiana marcela",
    workingDay: "media",
    sludar: function () {
        console.info(`hola ${this.name} estas en el clan ${this.clan}, tu jornada es de tipo ${this.workingDay}`)
    }
}

console.info(coder)

console.groupCollapsed("show date")
// diferentes formasde llamar a un objeto todas son correctas

console.log(coder.name, coder.lastName)
console.info(coder["name"], coder["lastName"])
console.info(coder.name, coder["lastName"])
coder.sludar()// invoca la funcion que creamos en coder

console.groupEnd()

console.groupCollapsed("add data")

coder.typeBlood = "B +"
coder["gener"] = "masculino"

coder.emergency = {}
coder.emergency.contacName = "natsu"
coder.emergency["backupPhoneNumber"] = "3152154"

Object.defineProperty(coder, "teamLeader", {
    value: "javier",
    writable: true, // permite que la propiedad se pueda modificar
    enumerable: true, // permite que la propiedad sea visible
    configurable: true // permite que la propiedad pueda ser eliminar
})



// delete coder.lastName // EL "delate" elimina lo que se llame dentro de la lista
// coder.lastName = undefined // se puede usar el "undefined" para limpiar el contenido mas se puede reutilizar

console.groupEnd()

console.groupCollapsed("update date")

// actualizar
coder.id = "T001"
coder["phoneNumber"] = "123387654"
console.info(coder)

console.groupEnd()

console.groupCollapsed("sum objects")

const objectoA = {
    a: "alpha",
    b: "bravo",
    c: "charlie",
}

const objectoB = {
    d: "delta",
    e: "echo",
    f: "foxtrot",
}

const objetoResultado = {
    ...objectoA,
    ...objectoB,
    // forma correcta de sumar objetos
}

// Object.assign(objectoA, objectoB) // forma incorrecta de sumar objetos este asigna u modifica el primer objeto y le agrega lo del segundo objeto


console.info(objectoA)
console.info(objectoB)
console.info(objetoResultado)


console.groupEnd()

console.groupCollapsed("destructuring")

const person = {
    nameCoder: "javier",
    lastNameCoder: "combita",
    birthDateCoder: new Date("1998-04-23 14:00:00"),
    identificationNumberCoder: "109624738486",
    location: {
        countryCoder: "colombia",
        state: "antioquia",
        city: "medellin",
        address: "cl 14 # 58-43",
    },
    emailCoder: "jcomte@outlook.com"
}

// forma manual depende del caso de uso cualquiera esta bien mas el dinamica lo deja
const name = person.nameCoder
const dovument = person.identificationNumberCoder
const gmail = person.emailCoder

console.log(name)
console.log(gmail)
console.log(dovument)

// forma dinamica

// const {
//     nameCoder: nameId, 
//     identificationNumberCoder: documentId, 
//     emailCoder: email,
// } = person

const nombreCoder = person.nameCoder
const apellidoCoder = person.lastNameCoder

console.groupEnd()

console.groupCollapsed("mascota")


const mascota = {

    nombre: "neron",
    edad: 1,
    raza: "pastor",
    especie: "belga",
    propietario: {
        nombre: "zero",
        apellido: "ingel",
        tipoDocumento: "cd",
        documento: "1059697487"
    }
}

const {nombre: nombreMascota, edad: edadMascota} = mascota

const {nombre: nombreDueño, apellido:apellidoDueño, tipoDocumento:tipoDocumentoDueño, documento:documentoDueño} = mascota.propietario

console.log(`Tu mascota se llama ${nombreMascota} y su edad es ${edadMascota}`)
console.log(`Tus datos son: Nombre ${nombreDueño}, Apellido ${apellidoDueño}, tipo de docuemto ${tipoDocumentoDueño} y tu documento es ${documentoDueño}`)

console.groupEnd()

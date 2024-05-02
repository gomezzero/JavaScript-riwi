let edad = parseInt(prompt("Ingrese su edad:"))

if (edad < 18) {
  console.warn("Advertencia: Eres menor de edad.")
} else if (edad >= 18 && edad <= 24) {
  console.info("¡Bienvenido a la juventud!")
} else {
  console.log("¡Hola! Bienvenido.")
}
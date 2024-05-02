let one = document.getElementById('btn-one'); //LO llama por id
let two = document.getElementsByClassName(`btn-two`); //LO llama por clases (class)
let three = document.getElementsByName('btn-three'); // lo llama por name
let four = document.getElementsByTagName('button'); // lo llama por la etiqueta

// el All es para que tome todas las referencias
let uno = document.querySelector(`#uno`)
let dos = document.querySelectorAll(`.dos`)
let tres = document.querySelectorAll(`[name="tres"]`)
let cuatro = document.querySelectorAll(`button`)

let btnExample = document.getElementById(`example`)
let example2 = document.querySelector(`#example span`) // puede hacer anidaciones

btnExample.textContent = "zero"

// con addEventListener puedo hacer que escuche eventos en este caso "click" y aparte con una funcion le podemos poner a hacer algo
btnExample.addEventListener(`click`, function () {
    alert("hola zero");
}) 

console.info("forma getElementsBy")
console.log(one);
console.info(two[0]);
console.info(three[0]);
console.info(four[3]);

console.info("forma querySelector(All)")
console.log(uno)
console.log(dos)
console.log(tres)
console.log(cuatro)

console.info(btnExample)
console.info(example2)


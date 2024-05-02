const listFruits = [
    "apple",
    "orange",
    "banana",
    "grape",
    "strawberry",
    "kiwi",
    "pineapple",
    "watermelon",
    "mango",
    "pear",
    "peach",
    "plum",
    "cherry",
    "blueberry",
    "raspberry",
    "blackberry",
    "lemon",
    "lime",
    "coconut",
    "pomegranate"
]

console.groupCollapsed("forEach")
// el forEach trae las llavas y el indice

// // print list with classic forEach (ambas hacen lo mismo en este caso, lo que cambia es su estructura)
// listFruits.forEach(fruit => {
//     console.info(fruit)
// })

// // uppercase list (mayuscula)
// el for Each solo resive listas
listFruits.forEach(fruit => {
    console.error(fruit.toUpperCase())
})

// // lowercase list (minuscula)
listFruits.forEach(fruit => {
    console.info(fruit.toLowerCase())
})

// primero es el elemento y el segundo es el index
listFruits.forEach((element,index) => {
    console.info("The fruit" + element + "is in the position " + index)
});

console.groupEnd()

console.groupCollapsed("for in")
// el for in trae los indice

// // print list with classic for in
for (const key in listFruits) {
console.info(listFruits[key]) // value = fruit
}

for (const key in listFruits) {
    console.info(key) // key = index
    console.info(listFruits[key]) // value = fruit
    }// De este modo primero me da su index y despues su valor

console.groupEnd()

console.groupCollapsed("for of")
// el for of solo trae los valores

for (const fruit of listFruits) {
    console.info(fruit)
}

console.groupEnd()
//metodos de cadena de texto parte 3
//https://regexr.com
let texto_largo ="Tito no es un mono cualquiera. A tito no le gusta trepar arboles y odia comer platanos. El prefiere pasear por el bosque, oler las flores y recojer las nueces que se caen de los arboles"
console.log(texto_largo.match(/no/g))

//Existe la palabra dentro del texto?
console.log(texto_largo.includes("terremoto"))

//saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("Tito"))
//saber si un texto termina con una palabra
console.log(texto_largo.endsWith("arboles"))
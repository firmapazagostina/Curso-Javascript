//metodos de cadena de textos 
let input = "EScorpio"
let db = "escorpio"
console.log(input===db)

//toLowerCase()- toUpperCase()
console.log(input.toLowerCase())
console.log(input.toUpperCase())
console.log(input.toLowerCase()==db.toLowerCase())
console.log(input.toUpperCase()===db.toUpperCase())

//formas de concatenar dos cadenas de caracteres
let str_1 ="hola soy la primera cadena"
let str_2 ="y yo soy la segunda"

console.log(str_1.concat(" ",str_2))
console.log(str_1+" "+str_2)

//Eliminar espacios al inicio y al final
let str_3="  hola soy un string con espacios al final.   "
console.log(str_3.length)
//trim()
console.log(str_3.trim().length)
console.log(str_3.trimStart().length)
console.log(str_3.trimEnd().length)

//Obtener el caracter que hay en cierta posicion
let str_4="Hola soy el string numero 4"
console.log(str_4.charAt(5))
console.log(str_4[6]) 

//Obtener la posicion de una palabra dentro de una cadena de caracteres
let str_5="Hola soy Agos y me gusta comer, mi nombre es Agos"
console.log(str_5.indexOf("Agos"))
console.log(str_5.charAt(9))
console.log(str_5.lastIndexOf("Agos"))
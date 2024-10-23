//como trabajar con listas (arrays, arreglos,vectores...)
let var1=false;
let array = [1,"hola",false,{id:5},null,undefined,var1]
console.log(array)
//acceder a los valores de un arrays a travez de su posicion
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])

//Metodos para introducir nuevos valores en nuestros arrays
//.push() .unshift() ==> Mutan el valor de nuestro array

//agregar valores al final ->push
array.push("final",45,100,true)
console.log(array)

//agregar valores al principio
array.unshift("inicio",99)
console.log(array)

//Metodos para eliminar valores de nuestro array
//.pop() .shift ==>mutan el valor del array

//Valores al final ->Pop
array.pop()
console.log(array)

//Valores al principio
array.shift()
console.log(array)

//Metodo para eliminar,modificar o añadir valores en nuestro array
//.splice(x,y,z)
const array2=[1,2,3,4,5,6]
//Eliminar valores .plice(indice, numValoresAeliminar)
array2.splice(2,2);
console.log(array2)
//Añadir valores .splice(indice, 0, valores)
array2.splice(2, 0, "hola",4)
console.log(array2
//Modificar valores .splice(indice,1,valores)
array2.splice(2,1,3);
console.log(array2)


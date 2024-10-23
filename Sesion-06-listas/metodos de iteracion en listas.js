//iterar valores de una lista
const array=["hola",2,90,false,undefined]
//forma antigua
for(let i=0; i<array.length;i++){
    console.log(array[i])
}
//forma ES6 (mas eficiente) .forEach
let suma=0;
const arrayNums=[3,6,77,2,3,93,19]
arrayNums.forEach(valor =>{
    suma+=valor;
    console.log(valor)
})
console.log(suma)

//busqueda de un valor dentro de una lista .find()
//Quiero encontar el elemento 90
const variable = array.find(valor =>{
    if (valor===90){
        return true
    }
})
console.log(variable)

const listaObjetos= [
    {nombre:"Agos", edad:24},
    {nombre:"Gus", edad:36},
    {nombre:"Nicole", edad:26},
    {nombre:"Lourdes", edad:9}
]
const objeto = listaObjetos.find(o =>{
    if(o.nombre==="Gus"){
        return true
    }
})
console.log(objeto.edad)
//otra forma:
const objeto2 = listaObjetos.find(o => o.nombre==="Agos")
console.log(objeto2.edad)
//otra forma mas eficiente:
const {edad} = listaObjetos.find(o=> o.nombre==="Lourdes")
console.log(edad)
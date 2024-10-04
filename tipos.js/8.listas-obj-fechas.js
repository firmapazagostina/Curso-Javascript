//Listas, array o arreglos
const lista=[1,"hola",true,undefined,null];
const lista2=new Array (2,"hola",true,undefined,null)
const lista3=new Array(3);
lista3[0]="soy el primer elemento index 0";
const lista4=[lista,lista2,lista3]

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//Objetos
const movil={
    altura:10,
    anchura:5,
    marca:"Xiaomi",
    inWhite:false,
    contactos:["agos","gus","raul"],
    tarjeta:{
        marca:"sandisk",
        almacenamiento:32
    }
}
movil.anyo=2019;
console.log(movil.tarjeta.marca);
console.log(movil.anyo)

//FECHAS
//Librerias de apoyo Moment.js

const ahora= new Date();
console.log(ahora);

const fecha_milis= new Date(10);//usando los milisegundos
console.log(fecha_milis);

const fecha_cadenas =new Date("march 25 2024")
console.log(fecha_cadenas)

const fecha_valores =new Date(2024, 0, 15)
console.log(fecha_valores);

const dia= ahora.getDate()
const mes= ahora.getMonth() +1
const anio= ahora.getFullYear()
console.log(dia, mes, anio)

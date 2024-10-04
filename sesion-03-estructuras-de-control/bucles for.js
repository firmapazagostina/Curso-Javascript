// Bucles for

for (let i=0; i<10; i++){
 console.log(i)
}

let lista=[1,4,6,2,3,7,10,12];
for(let i=0; i<lista.length; i++){
    console.log(lista[i]*2)
}

//estructura for...of
for (let valor of lista) {
    console.log(valor)
}

//estructura forEach
lista.forEach(valor => {
    console.log(valor)
})

let persona ={
    nombre:"Agos",
    apellido:"Firma Paz",
    edad:34,
    isDeveloper:false
}
for(let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad])
}


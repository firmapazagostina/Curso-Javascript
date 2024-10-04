//casos muy especificos

//el constinue y el breack es una mala practica, hay que utilizarla en casos muy especifico

let lista=[1,2,3,4,5,6,7,8];

for(let i=0; i<lista.leng; i++){

    if(lista[i]===3){
        continue;
    }
    console.log(lista[i]);

    if(lista[i]>5){
        break;
    }
    let j=50;
}

//cual es el ambito de un bucle
console.log(j)
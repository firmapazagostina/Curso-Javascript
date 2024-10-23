//principales operaciones aritmeticas
let a=3.5;
let b=4.8;

//suma(+)
console.log(a+b)

//resta(-)
console.log(a-b)
//Multiplcacion
console.log(a*b)
//division
console.log(a/b)

//representacion de lso numeros en cadena de texto
console.log(typeof a);
let a_s=a.toString();

console.log(a_s);
console.log(typeof a_s);

//redondeo de numeros decimales
let c= 3.3;
let d=c*3;
console.log(d)
console.log(typeof d)
// .toFixed()
console.log(d.toFixed(3))
console.log(typeof d.toFixed(3))
let e=1839.1234456;
let f=233455674534345;
console.log(e.toFixed(2))
console.log(f.toFixed(2))

// .toPrecision() - limita el numero de cifras significativas
console.log(e.toPrecision(7));
console.log(f.toPrecision(7))

console.log(typeof f.toPrecision(3))

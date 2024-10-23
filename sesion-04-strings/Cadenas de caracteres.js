//cadena de caracteres string 

let str = "Hola soy un string";
console.log(str.length);

//obtener cadena de caracteres
//slice() substrigo() substr()

let slice_str = str.slice(5,10)
console.log(slice_str)

let substring_str=str.substring(5,10)
console.log(substring_str)

let substr_str=str.substr(5,10)//ya no se usa este metodo
console.log(substr_str)

let cadena="Hola mi nombre es Agostina"
console.log(cadena)

console.log(cadena.replace('Agostina','Agos'))

//Al utilizar strings solo reemplaza la primera instancia
let texto_largo="Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final Lorem ipsum"
console.log(texto_largo.replace('Lorem','web'))

//Al utiligar la exprecion regular /g (global), reemplaza todas las instancias
console.log(texto_largo.replace(/Lorem/g, 'web'))
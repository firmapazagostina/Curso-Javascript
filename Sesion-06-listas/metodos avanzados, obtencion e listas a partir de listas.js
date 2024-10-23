//trabajar con metodos mas vanzados
//.map() .filter() .reduce()

const val= array=["santa fe","esperanza", "galvez","parana"]
array.forEach(v=>{
    console.log(v)
    return 4
})
console.log(val)

const newArray=array.map((valor, indice)=> `${indice + 1}- ${valor}`
)
console.log(newArray)

const listaObjetos= [
    {nombre:"Agos", edad:24},
    {nombre:"Gus", edad:36},
    {nombre:"Nicole", edad:26},
    {nombre:"Lourdes", edad:9}
]
/*const personasMayores= listaObjetos.filter(obj=>{
    if(obj.edad >30){
        return true
    } else{
        return false
    }
})
console.log(personasMayores)*/

const personasMayores=listaObjetos.filter(obj=>obj.edad>30)
console.log(personasMayores)

const nuevaLista= listaObjetos.filter(obj=> obj.nombre!=="Gus")
console.log(nuevaLista)

//
const valores = [3,56,23,5,90,110]

const suma = valores.reduce((acumulado, cur, i, arrayOriginal)=>{
    console.log(acumulado)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado + cur
})
console.log(suma)
function randomEntreCeroX (x) {
    let numero = Math.random(); //nos devuelve un numero entre cero y uno 
    numero = numero * x

    return Math.floor(numero)

}

let numeroRandom = randomEntreCeroX(10);
console.log(numeroRandom)

let alumno = {
    nombre: "juan",
    edad: 17,
    deporte: "futbolpro",
}
//asignacion - natacion de punto
console.log(alumno.nombre)

alumno.nombre = "pedro"                 

console.log(alumno.nombre)

//desestructuracion de objetos 

let {nombre, edad, deporte }  = alumno ;
console.log (nombre, edad, alumno) ;

// json - javascript objet notacion

let objetJson = {"nombre":" juan", "edad": "17", "deporte": "futbol"}

console.log(objetJson)
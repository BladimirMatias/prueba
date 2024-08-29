let edad1;
let edad2;
let edad3;

let edades = []; //vacio
const edad = [17,18,19]
let nombre = ["juan", "pedro", "jose"];
let jugadores = [
    { nombres :  "juan", edad: 17, skill: ""},
    { nombre: "pedro", edad: 16, skill: ""},
]
//arreglo bidimencional
let partidas = [[], {}, "", 15];

//notacion de corchetes obtengo un elemento
console.log("la edad es: ", edad[0]);
edad[0] = 15;

edades.push(5); // agregar u elemento al final
edad.pop(i) //quita el ultimo elemento

edad.length();

// edad.map() HACE ALGO POR CADA ELEMENTO

edad.map((edad) => {
    console.log("la edad es: ", edad)
})
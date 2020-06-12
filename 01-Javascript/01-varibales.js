//Mutables e Inmutables

//Mutables
var  numeroUno = 1;
let  numoroDos = 2;

numeroUno = 5;
numoroDos = 8;
numeroUno = false;
numoroDos = true;

//Inmutables
//const no se puede reasignar el valor a una variable.

const configuracionArchivos = "PDF";
//configuracionArchivos = "XML"

//Tipo de variables

const numero = 1; //number
const sueldo = 1.2; // number
const texto = "Vinicio" //string
const booleannoo = false;//boolean
const hijos = null;
const zapatos = undefined; //undefined
const apellido = 'quinga'; //undefined

console.log(typeof numero );
console.log(typeof  sueldo);
console.log(typeof texto);
console.log(typeof booleannoo);
console.log(typeof zapatos);
console.log(typeof hijos);
console.log(typeof zapatos);
console.log(typeof apellido);

if(true == true) {
    console.log("Es verdadero")

}
else {
    console.log("Es falso")
}

if("") {
    console.log("Es verdadero")

}
else {
    console.log("Es falso")
}


if("Vinicio") {
    console.log("Es verdadero")

}
else {
    console.log("Es falso")
}


if(-1) {
    console.log("Es verdadero")

}
else {
    console.log("Es falso")
}



if(0) {
    console.log("Es verdadero")

}
else {
    console.log("Es falso")
}

if(null) {
    console.log("Es verdadero")

}
else {
    console.log("Es falso")
}

if(undefined) {
    console.log("Es verdadero")

}
else {
    console.log("Es falso")
}
//orden de importacia
//1) const
//2) let
//3) x -> "var" nunca utilizar

// Objectos Js (Jason) - Arreglos

const vinicio =  {
    nombre: "Vinicio", //llave:valor,
    apellido: 'Quinga',
    edad: 31,
    hijos:null,
    zapatos:undefined,
    casado: false,
    ropa:{
        color:'plomo',
        talla:'40'
    },
    mascotas:['cachetes','pequitas','panda']

}; //Object
vinicio.apellido;//quinga



const arregloNumeros =[]; //object

console.log(vinicio);
console.log(arregloNumeros);
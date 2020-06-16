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
        talla:'40',
    },
    mascotas:['cachetes','pequitas','panda']

}; //Object
//acceder a las propiedades del objecto
vinicio.apellido;//quinga
vinicio["nombre"]="Vinicio";
vinicio.nombre = "Wilmer";
vinicio.sueldo; //undefined

console.log(vinicio.sueldo)
vinicio.sueldo = 1.2

console.log(vinicio.sueldo)
vinicio["gastos"]= 0.8;
vinicio.nombre = undefined;

console.log(vinicio)
//console.log(Object.keys(vinicio))
console.log(Object.values(vinicio))
delete vinicio.nombre; // eliminar la llave nombre
//console.log(vinicio.sueldo)
//console.log(Object.keys(vinicio))
console.log(Object.values(vinicio))

//Lista de variables por valos JS
//number
//string
//boolean
//undefined

let edadVinicio = 31;
let edadWilmer = edadVinicio

console.log(edadVinicio); //31
console.log(edadWilmer);//31

edadVinicio = edadVinicio +1;

console.log(edadVinicio); //
console.log(edadWilmer);//


//Variables por referencia  en JS
let rafael = {
    nombre: "Rafael"
};

let lenin = Object.assign(target:{}, rafael);
console.log(rafael);
console.log(lenin);

lenin.nombre ="lenin"
delete rafael.nombre;
console.log(rafael);
console.log(lenin);





/*let lenin = rafael;

console.log(rafael);
console.log(lenin);
lenin.nombre = "lenin";
console.log(rafael);
console.log(lenin);

delete rafael.nombre;
console.log(rafael);
console.log(lenin);

*/




/*
const arregloNumeros =[]; //object

console.log(vinicio);
console.log(arregloNumeros);

*/

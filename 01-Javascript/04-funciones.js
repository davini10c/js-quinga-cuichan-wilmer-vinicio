

function soloNumeros(a,b,c) {
    return a-b+c; // valor a devolver
}

function soloLetras(a,b,c) { // devuelve undefined
    console.log(a,b,c);
}

soloNumeros('v', true, [1,2,3]);
soloNumeros();

//funciones Nombradas

function funcionNombrada() {};
funcionNombrada();

const funcionNombradaDos = function () {}; //funciones anonimas
var funcionNombradaTres = function () {}; // funciones sin nombre
let funcionNombradaCuatro = function  opcional() {}; // funcion anonima

funcionNombradaDos();
funcionNombradaTres();
funcionNombradaCuatro();

const funcionNombradaCinco = () => {} //fat arrow functions

const funcionNombradaSeis = (x) => {
    return x + 1

}; //fat arrow functions

const funcionNombradaSiete = (x) => x+1; //fat arrow functions
//una sola linea
//omitir el return
//omito llaves

const funcionNombradaSiete = x => x+1; //fat arrow functions
//tengo solo un parametro
// omito las parentesis

const funcionNombradaOcho = (x,y,z) => x+y+z; //fat arrow functions
//tengo solo mas de un parametro
// no  omito las parentesis




//...otrosNumeros parametro infinito
function sumarNumeros(numeroInicial, //numero
                      ...otrosNumeros) { // parametro infinito []

return numeroInicial + otrosNumeros.reduce((a, v)=> a+v,0);

}
sumarNumeros(1, 2,3,4,5,6,7,8,9,10);



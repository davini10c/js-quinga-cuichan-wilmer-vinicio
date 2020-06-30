
const fs = require('fs');

console.log('Primero'); //sincrona

// callback es una funcion que se ejecuta dentro de las funciones asincronas y devulve un resultado
fs.readFile( //asincrona
    './07-ejemplo.txt',
    'utf-8',
    (error, contenido )=>{
        console.log('Segundo');
        if (error){
            console.log('Hubo error', error);
        }
        else
        {
            console.log(contenido);
        }
    }
);



/*const suma = 5+3; // sincrona
console.log('suma', suma); //sincrona
console.log('Final'); //sincrona*/
const arreglo = [
    {
        id:1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id:2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id:3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id:4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id:5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id:6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id:7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id:8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id:9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id:10,
        nombre: 'Ramiro',
        nota: 12
    }
];


//Funciones como parametros

//operador find
//devolver una expresion -> Truty Falsy
//en javaScript o pytescript

const respuestaFind =  arreglo
.find(
    function (valorActual, indiceActual, arregloCompleto) {
      /*  console.log('valorActual', valorActual);
        console.log('indiceActual', indiceActual);
        console.log('arregloCompleto', arregloCompleto);*/

        return valorActual.nombre === "Cristian";
    }
);

//console.log('respuestaFind', respuestaFind) //undefind


//FindIndex
//devolver una expresion -> Truty Falsy
//Nos devuelve el indice
const respuestaIndex=  arreglo
    .findIndex(
        function (valorActual, indiceActual, arregloCompleto) {
         /*   console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);*/

            return valorActual.nombre === "Cristian";
        }
    );

//console.log('respuestaIndex', respuestaIndex)

//Foreach
//solo iterar
const respuestaForEach=  arreglo
    .forEach(
        function (valorActual, indiceActual, arregloCompleto) {
         /*   console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);*/
         }
    );

//console.log('respuestaForEach', respuestaForEach) //undefined,


//modificar el arreglo
//operador map
// devolver el nuevo elemento
//clona al arreglo y lo modifica, se crea un nuevo arreglo


const respuestaMap=  arreglo
    .map(
        (valorActual, indiceActual, arregloCompleto) => {
        const nuevoElemente = {
            id: valorActual.id,
            nombre: valorActual.nombre,
            nota: valorActual.nota + 1

        };
        return nuevoElemente;

          valorActual.nota = valorActual.nota + 1;
          return valorActual;
        }
    );

//console.log('respuestaMap', respuestaMap)
//console.log('arreglo', arreglo);

const respuestaMapNuevo=  arreglo
    //funcion anonima, no tiene nombre
    //funcion de flecha gorda
    .map(
         (valorActual, indiceActual, arregloCompleto) => {
            return valorActual.nota;
        }
    );

//console.log('respuestaMapNuevo', respuestaMapNuevo)
//console.log('arreglo', arreglo);

//filtrar el arreglo
// filter
//devolver expresion truty falsy

const respuestaFilter=  arreglo
     .filter(
        (valorActual, indiceActual, arregloCompleto) => {
            return valorActual.nota >= 14;
        }
    );

console.log('respuestaFilter', respuestaFilter)
//console.log('arreglo', arreglo);



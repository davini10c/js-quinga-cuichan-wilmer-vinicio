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

//console.log('respuestaFilter', respuestaFilter)
//console.log('arreglo', arreglo);


//some devuelve un booleano
// hay notas menores a nueve si o no
//and
const respuestaSome = arreglo
    .some(
        (valorActual, indiceActual, arregloCompleto)=>{
            return valorActual.nota < 4;

        }
    )

//console.log('respuestaSome',respuestaSome)


//every -> expresion
// devuelve un booleano
//todas las notas son mayores a 14 si o no
//and



const respuestaAny = arreglo
    .every(
        (valorActual, indiceActual, arregloCompleto)=>{
            return valorActual.nota > 14;

        }
    )

//console.log('respuestaAny',respuestaAny)

//[1,2,3,4,5,6,5,4,3,1]
//reduce izq -> derecha
// reduceRight der -> izq
const  respuestaReduce = arreglo
    .reduce(
        (valorAcumulado, valorActual, indice, arreglo)=>{
            return valorAcumulado + valorActual.nota
        },
        0 // acumulado
    )

//console.log('respuestaReduce',respuestaReduce)

const  respuestaReduce2 = arreglo
    .reduce(
        (valorAcumulado, valorActual, indice, arreglo)=>{
            return valorAcumulado + valorActual.nota
        },
        500 // acumulado
    )

//console.log('respuestaReduce2',respuestaReduce2)

const arregloEstudiantesANueve = arreglo
    .map((v)=> v.nota * 1.3)
    .filter( (nota)=>  nota < 9 )

    const totalPuntosEstudiante = arregloEstudiantesANueve

    .reduce((acumulado, actual)=> acumulado +actual,0);

const notaPromedio = totalPuntosEstudiante / arregloEstudiantesANueve.length;

console.log('notaPromedio',notaPromedio)

















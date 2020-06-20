const arregloClase = [
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
const  vocales = ["a","e","i","o","u","A","E","I","O","U"];

const respuestaForEach =  arregloClase
    .forEach(
         (valorActual) =>{
             for (let letra of valorActual.nombre){
                 if (vocales.indexOf(letra) === -1){
                    valorActual.nota =  valorActual.nota + 0.05;
                  //  console.log("0.05", letra,  valorActual.nota, valorActual.nombre, vocales.indexOf(letra) );
                 }
                 else
                 {
                     valorActual.nota =  valorActual.nota + 0.1;
                //    console.log("0.1", letra,  valorActual.nota, valorActual.nombre, vocales.indexOf(letra)  );
                 }
             }
        }
    );

console.log("notas", arregloClase);

const estudiantesAprueban=  arregloClase
    .filter(
        (valorActual) => {
            return valorActual.nota >= 14;
        }
    );

console.log("Estudiantes que pasaron la materia ", estudiantesAprueban);

const estudiantesReprueban=  arregloClase
    .filter(
        (valorActual) => {
            return valorActual.nota < 14;
        }
    );

console.log("Estudiantes que no pasaron la materia", estudiantesReprueban);
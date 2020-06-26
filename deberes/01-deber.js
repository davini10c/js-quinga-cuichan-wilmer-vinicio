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

const respuestaMap =  arregloClase
    .map(
         (valorActual) =>{

             const nuevoElemente = { //clona vector
                 id: valorActual.id,
                 nombre: valorActual.nombre,
                 nota: valorActual.nota

             };
             for (let letra of nuevoElemente.nombre){ // devuelve las letras
                 if (vocales.indexOf(letra) === -1){ //busca consonantes
                     nuevoElemente.nota =  nuevoElemente.nota + 0.05;
                    // console.log("0.05", letra,  nuevoElemente.nota, nuevoElemente.nombre, vocales.indexOf(letra) );
                 }
                 else
                 { //busca vocales
                     nuevoElemente.nota =  nuevoElemente.nota + 0.1;
                     //console.log("0.1", letra,  nuevoElemente.nota, nuevoElemente.nombre, vocales.indexOf(letra)  );
                 }
             }

             return nuevoElemente;
        }
    );

console.log("notas Finales", respuestaMap);

const estudiantesAprueban=  respuestaMap
    .filter(
        (valorActual) => {
            return valorActual.nota >= 14;
        }
    );
console.log("Estudiantes que pasaron la materia ", estudiantesAprueban);

const estudiantesReprueban=  respuestaMap
    .filter(
        (valorActual) => {
            return valorActual.nota < 14;
        }
    );

console.log("Estudiantes que no pasaron la materia", estudiantesReprueban);
console.log("Notas Originales ", arregloClase);
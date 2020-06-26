const vinicio = {
    nombre:"Vinicio"
};

const carolina = {
    nombre:"Carolina",
    apellido:"Quinga"
};



//destructurar es unir los elementos de los vectores
//si tiene 2 parametos iguales se queda el ultimo.
const vinicioCarolina =  { //creando una nueva referencia, clonar
    ...carolina,
    ...vinicio,

};
//vinicioCarolina.nombre = "Carolina";
console.log('vinicioCarolina', vinicioCarolina);
console.log('vinicio', vinicio);


//en arreglo se copian todos los valores si estan repetidos
//clonar arreglos
const arregloUno = [1,2,3,4,5];
const arregloDos = [6,7,8,9,10];

const superArreglo = [
    ...arregloUno,
    ...arregloDos
];

console.log('superArreglo', superArreglo);
console.log('arregloUno', arregloUno)
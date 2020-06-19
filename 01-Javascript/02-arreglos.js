//const arreglo = [1,2,3,4,5,6,7,8,9,10];

const arreglo = [6,7,8,9,10];

//arreglo = 1;

let cualquierCosa = "ASD";
cualquierCosa = 1;
cualquierCosa = true;
cualquierCosa = undefined;
cualquierCosa = null;
cualquierCosa = {};
cualquierCosa = [];

const arregloTodo = [ true, 1, 1.2, "Adrian", undefined, null, {}, [1,2, true , "A"]];

let a = [1,2,3];

//for of da el valor
for (let numero of arreglo){ //valores
  //  console.log('numero',numero)
}


//for in   da posiciones
for (let numero in arreglo){ //indices
 //   arreglo[indice];
 //   console.log('numero',numero)
}

//const arreglo = [6,7,8,9,10];

//metodo push añade un elemente al final del arreglo
arreglo.push(11);

//metodo para eliminar al final del elemento
arreglo.pop();

//metodo unshift añadir al principio del arreglo
arreglo.unshift(5);

//[ 5, 6, 7, 8, 9, 10 ]

//metodo para eliminar elementos en cualquier posicion
arreglo.splice(0,1);

//metodo para agregar elementos en cualquier posicion
arreglo.splice(0,0,3,4,5);

//metodo para buscar el indice
//cunado el indice no exoste respuesta -1
const indice = arreglo.indexOf(9); //6

//console.log('indice', indice);

arreglo.splice(indice,1);

console.log(arreglo);


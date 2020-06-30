const fs = require('fs');

function promesaEsPar(numero) {

    const miPrimerPromesa = new Promise(
        (resolve, reject)=>{
            if(numero % 2 == 0)
            {
                resolve(numero);
            }
            else{
                reject ('No es par = (');
            }
        }
    )
    return miPrimerPromesa
}

function promesaElevarAlCuadrado(numero) {

    const miPrimerPromesa = new Promise(
        (resolve, reject)=>{
       const numeroElevadoAlCuadrado = Math.pow(numero,2);
            resolve(numeroElevadoAlCuadrado) ;//resolve la respuesta correcta
        }
    )
    return miPrimerPromesa
}

promesaEsPar(2)
    .then(//try
        (numeroPar)=>{
            console.log('Contenido then', numeroPar);
            //ejecuta la nueva promesa
            return promesaElevarAlCuadrado(numeroPar)

        }
    )
    .then(
        (numeroParAlCuadrado)=>{
            console.log('Numero par al cuadrado:', numeroParAlCuadrado);

        }

    )
    .catch(//catch
        (error)=>{
            console.log('Contenido catch',error);
        }
    )

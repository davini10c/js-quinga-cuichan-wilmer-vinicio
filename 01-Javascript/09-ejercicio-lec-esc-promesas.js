const fs = require('fs');

/*
* Hacer una funcion que me acepte como parametro una variable
* con el path del archivo y el contenido a agregar al contenido
* del archivo. la funcion debe tomar estos 2 parametros y leer
* el archivo y añadir el texto al final del archivo. Al final vamos a leer
* el arcjivo nuevamente e imprimirlo en consola.
* todoooo esto debe ser realizado con promesas
* */

function promesaLeer(path) {

    const miPromesaLeer = new Promise(
        (resolve, reject)=>{
            fs.readFile(
                path,
                'utf-8',
                (error, contenidoleido)=>{
                    if (error){
                        console.log('Hubo error', error);
                        reject(error);
                    }
                    else
                    {
                        resolve(contenidoleido);
                    }
                }
            );

        }
    );
    return miPromesaLeer
}

function promesaEscribir(contenidoNuevo, path,contenidoleido ) {

    const miPromesaLeer = new Promise(
        (resolve, reject)=>{
            fs.writeFile(
                path,
                contenidoleido + '\n'+ contenidoNuevo,
                'utf-8',
                (error)=>{
                    if (error){
                        console.log('Hubo error', error);
                    }
                    else
                    {
                        resolve();
                    }
                }
            );
        }
    );
    return miPromesaLeer
}


function ejercicio(path, contenidoNuevo){

    promesaLeer( path)
        .then( //archivo leido
            (salidaContenidoleido)=>{
                //  console.log('Salida Contenido', salidaContenidoleido);
                return promesaEscribir(
                    contenidoNuevo,
                    path,
                    salidaContenidoleido)
            }

        )
        .then(//archivo escrito
            ()=> promesaLeer(path)
        )
        .then(
            (contenidoTotal)=>{
                console.log('Todo el contenido', contenidoTotal);
            }
        )
        .catch(
            (error)=>{
                console.log('Contenido error',error);
            }
        )
}
ejercicio('./07-ejemplo.txt', 'paty')

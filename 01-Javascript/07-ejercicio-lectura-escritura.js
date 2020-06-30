const fs = require('fs');

/*

hacer una funcion que me acepte como parametro una variable con el path del archivo
y el contenido a agregar al contenido del archivo. La funcion debe tomar estos dos parametros y leer el
archivo y añadir el texto al final del archivo.
 */


function escribirArchivo(path, contenidoNuevo) {

    fs.readFile( //asincrona
        path,
        'utf-8',
        (error, contenidoLeido )=>{

            if (error){
                console.error('Error leyendo archivo', error);
            }
            else
            {
                fs.writeFile(
                    path,
                    contenidoLeido + '\n' + contenidoNuevo,
                    'utf-8',
                    (error)=>{
                        if(error){
                          console.error('Error leyendo archivo',error);
                        }
                        else{
                            console.log('Operacion terminada con exito');

                        }

                    }
                );

            }
        }
    );

}

escribirArchivo('./07-ejemplo.txt', 'holaBuenasHOlas ');


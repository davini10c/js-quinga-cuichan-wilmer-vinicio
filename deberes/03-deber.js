const fs = require('fs');

    const promesaLeerArchivo = (path) => {
        return new Promise(
            (resolve, reject) => {
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
    }


    const promesaEscribirArchivo = (contenidoNuevo, path,contenidoleido) => {
        return new Promise(
            (resolve, reject) => {
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
    }



async function ejercicio(path, nuevoContenido) {
    
    try {
        //ejecuta las 2 promesas
        const leerArchivo = await promesaLeerArchivo(path)
        await  promesaEscribirArchivo(nuevoContenido, path, leerArchivo);

        //lee el archivo final
        const newLeerContenido = await  promesaLeerArchivo(path)
        console.log(newLeerContenido);
        
    }
    catch (e) {
        console.error(e)
    }

}

const respuesta = ejercicio('./text.txt','segundo')
console.log(respuesta)

const promesaLeerArchivo = () => {
    return new Promise(
        (res, rej) => {
            // res('CONTENIDO LEER ARCHIVO')
            res('CONTENIDO LEER ARCHIVO');
        }
    );
}
const promesaEscribirArchivo = () => {
    return new Promise(
        (res, rej) => {
            // res('CONTENIDO ESCRIBIR ARCHIVO');
            rej('ERROR =(')
        }
    );
}

// ESTO NO ES POSIBLE
// PORQUE NO ESTA DENTRO DE UNA FUNCION
// const respuesta = await promesaEscribirArchivo;

// ASYNC AWAIT -> DENTRO DE UNA FUNCION
async function ejercicio() {
    console.log('1');
    try {
        console.log('2');
        const contenidoArchivoActual = await promesaLeerArchivo();
        console.log(contenidoArchivoActual);
        console.log('3');
        await promesaEscribirArchivo();
        console.log('4');
        const nuevoContenido = await promesaLeerArchivo();
        console.log(nuevoContenido);
        console.log('5');
    } catch (error) {
        console.error(error);
    }
    console.log('6');
    console.log('7');
}

const respuestaEjercicio = ejercicio();
//console.log('respuestaEjercicio', respuestaEjercicio);
//console.log('promesaLeerArchivo', promesaLeerArchivo());
//console.log('promesaEscribirArchivo', promesaEscribirArchivo());

//  const f = async () => {
// contenido
// }


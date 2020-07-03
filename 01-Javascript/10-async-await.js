
const promesaLeerArchivo = new Promise();
const promesaEscribirArchivo = new Promise();

//asyb await -> dentro de una funcion
async function ejercicio() {


    try {
        const respuestaLecturaArchivo = promesaLeerArchivo();
        await promesaEscribirArchivo();
        const nuevoContenido = await promesaLeerArchivo();
        console.log(nuevoContenido)
    }
    catch (error) {

        console.log(error);
    }



}

const f = async ()=>{
    //contenido

}


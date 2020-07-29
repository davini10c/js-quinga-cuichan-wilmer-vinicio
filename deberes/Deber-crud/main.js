
const fs = require('fs')
const inquirer = require('inquirer')
const pathUniverso = './Universo.json'
const pathAlien = './Alien.json' // DB Ingredientes
const opcionConstelacion = ["Plato fuerte", "Sopa", "Postre", "Bebida", "Comida rapida"]
const tipoColorPiel = ["blanca", "Negra", "Azul", "Oscura", "Plateada"]

//funciones para leer y escribir en el archivo
function promesaLeerArchivo(pathuniversoOAlien)
{
    return new Promise(
        (resolve, reject) =>
        {
            fs.readFile(
                pathuniversoOAlien,
                'utf-8',
                (error, datoUniversoOAlien) =>
                {
                    if (error)
                    {   console.log("Error", error)
                        reject(error)
                    } else
                        {
                        resolve(JSON.parse(datoUniversoOAlien))
                        }
                });
        }
    )
}

function promesaEscribirArchivo(pathuniversoOAlien, nuevoDato)
{
    return new Promise(
        (resolve, reject) =>
        {
            fs.writeFile(
                pathuniversoOAlien,
                JSON.stringify(nuevoDato),
                'utf-8',
                (error) =>
                {
                    if (error)
                    {
                        console.log("Error de escritura", error)
                        reject(error)
                    } else
                        {
                        resolve()
                        console.log("Dato Guardo")
                        }
                });
        }
    )
}

//menu principal opciones universo y alien
async function menuPrincipal() {
    try
    {
        const menuPrinci = await inquirer.prompt([
            {
                type: 'list',
                name: 'opcionMenuPrincipal',
                message: 'Seleccione una categoria',
                choices: ["Universo","Alien","Salir"]
            }
        ]);
        switch (menuPrinci["opcionMenuPrincipal"])
        {
            case "Universo":
                return await mostrarMenuUnierso();
            case "Alien":
                return  await mostrarMenuAlien();
            case "Salir":
                break
        }
    }
    catch (error) {
        console.log(error);
        
    }

}
//funciones para universo
async function mostrarMenuUnierso() {
    try {
        const menuUniverso = await inquirer.prompt([
            {
                type: 'list',
                name: 'opcionMenu',
                message: 'Universo seleccione una opcion:',
                choices: ["Ver todos los universos", "Nuevo Universo", "Editar un universo", "Eliminar un Universo", "Volver"]
            }
        ])
        switch (menuUniverso["opcionMenu"]) {

            case "Ver todos los universos":
                const listaUniversos = await mostrarTodosLosUniersos()
                listaUniversos.forEach(universo => console.log(universo))
                return mostrarMenuUnierso()

            case "Nuevo Universo":
                const nuevoUniverso = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'nombreUniverso',
                        message: 'Nombre Universo:'
                    },
                    {
                        type: 'list',
                        name: 'opcionConstelacion',
                        message: 'Seleccione una Constelacion:',
                        choices: opcionConstelacion
                    },
                    {
                        type: 'number',
                        name: 'numeroPlanetas',
                        message: 'Numero de Planetas:'
                    },
                    {
                        type: 'number',
                        name: 'numeroSoloes',
                        message: 'Numero de Soles'
                    },
                    {
                        type: 'confirm',
                        name: 'tieneAgujerosNegros',
                        message: 'Pose Agujeros Negros?:',
                        default: true
                    }
                ])
                return await agregaruniversoDB(nuevoUniverso)

            case "Editar un universo":
                const listaUniversosEditables = await mostrarTodosLosUniersos()
                const universoAEditar = await inquirer.prompt([
                    {
                        type: 'list',
                        name: 'listaUniversos',
                        message: 'Seleccione una universo',
                        choices: listaUniversosEditables
                    },
                    {
                        type: 'list',
                        name: 'campoAEditar',
                        message: 'Seleccione el campo a editar:',
                        choices: ["nombreUniverso", "opcionConstelacion", "numeroPlanetas", "numeroSoles", "tieneAgujerosNegros"]
                    }
                ])
                const idUniversoAEditar = parseInt(universoAEditar["listaUniversos"].split("-")[0])
                switch (universoAEditar["campoAEditar"]) {
                    case "nombreUniverso":
                        const nuevoNombre = await inquirer.prompt([
                            {
                                type: 'input',
                                name: 'nuevoNomUniverso',
                                message: 'Nuevo universo:'
                            }
                        ])
                        return editarUniversoDB(idUniversoAEditar, 1, nuevoNombre["nuevoNomUniverso"])

                    case "opcionConstelacion":
                        const nuevaOpcionConstelacion = await inquirer.prompt([
                            {
                                type: 'list',
                                name: 'nuevaOpcionConstelacion',
                                message: 'Seleccione un tipo:',
                                choices: opcionConstelacion
                            }
                        ])
                        return editarUniversoDB(idUniversoAEditar, 2, nuevaOpcionConstelacion["nuevaOpcionConstelacion"])
                    case "numeroPlanetas":
                        const nuevoNumPersonas = await inquirer.prompt([
                            {
                                type: 'number',
                                name: 'nuevoNumPlanetas',
                                message: 'Numero de planetas:'
                            }
                        ])
                        return editarUniversoDB(idUniversoAEditar, 3, nuevoNumPersonas["nuevoNumPlanetas"])
                    case "numeroSoles":
                        const nuevaNumeroSoles = await inquirer.prompt([
                            {
                                type: 'number',
                                name: 'nuevaNumeroSoles',
                                message: 'Numero de soles:'
                            }
                        ])
                        return editarUniversoDB(idUniversoAEditar, 4, nuevaNumeroSoles["nuevaNumeroSoles"])
                    case "tieneAgujerosNegros":
                        const tieneAgujerosNegros = await inquirer.prompt([
                            {
                                type: 'confirm',
                                name: 'tieneagujeros',
                                message: 'Tiene agujeros negros?:',
                                default: false
                            }
                        ])
                        return editarUniversoDB(idUniversoAEditar, 5, tieneAgujerosNegros["tieneagujeros"])
                    default:
                        break
                }
                break
            case "Eliminar un Universo":
                const universosBorrables = await mostrarTodosLosUniersos()
                const universoABorrar = await inquirer.prompt([
                    {
                        type: 'list',
                        name: 'listaUniversos',
                        message: 'Seleccione una universo',
                        choices: universosBorrables
                    }
                ])
                const iduniversoABorrar = parseInt(universoABorrar["listaUniversos"].split("-")[0])
                return eliminarUniversoDB(iduniversoABorrar)
            case "Volver":
                return await menuPrincipal()
            default:
                break
        }
    } catch (error) {
        console.log('error', error)
    }
}


//funciones para alien

async function mostrarMenuAlien()
{
    try {
        const menuAlien = await inquirer.prompt([
            {
                type: 'list',
                name: 'opcionMenuAlien',
                message: 'Menú Alien.- Seleccione una opción:',
                choices: ["Mostrar Alienes", "Nuevo Alien", "Editar Alien",
                    "Eliminar Alien", "Volver"]
            }
        ])
        switch (menuAlien["opcionMenuAlien"]) {
            case "Mostrar Alienes":
                const verAlien = await inquirer.prompt([
                    {
                        type: 'list',
                        name: 'opcionVistaAlien',
                        message: 'Mostrar Alien.- Seleccione una opción:',
                        choices: ["Ver todos", "Por Universo"]
                    }
                ])
                switch (verAlien["opcionVistaAlien"]) {
                    case "Ver todos":
                        await mostrarTodosLosAlienDB()
                      //  console.log("|______________________________|")
                        return mostrarMenuAlien()
                    case "Por Universo":
                        const universo = await mostrarTodosLosUniersos()
                        const alienDeUniverso = await inquirer.prompt([
                            {
                                type: 'list',
                                name: 'listaUniverso',
                                message: 'Seleccione una universo:',
                                choices: universo
                            }
                        ])
                        await desplegarAlienPorUniverso(alienDeUniverso)
                      //  console.log("|______________________________|")
                        return mostrarMenuAlien()
                }
                break
            case "Nuevo ingrediente":
                const listauniversosActuales = await mostrarTodosLosUniersos()
                const alienDeluniverso = await inquirer.prompt([
                    {
                        type: 'list',
                        name: 'listaUniversos',
                        message: 'Seleccione un universo:',
                        choices: listauniversosActuales
                    }
                ])
                const nuevoAlien = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'nombreEspecie',
                        message: 'Nombre de la especie:'
                    },
                    {
                        type: 'number',
                        name: 'numeroOjos',
                        message: 'Numero de Ojos:'
                    },
                    {
                        type: 'list',
                        name: 'colorPiel',
                        message: 'Seleccione un tipo:',
                        choices: tipoColorPiel
                    },
                    {
                        type: 'confirm',
                        name: 'poseeNavesGalaxticas',
                        message: 'Tienen Naves Galaxticas?:',
                        default: false
                    }
                ])
                /* comidaDelIngrediente["listaComidas"] viene como 'id-nombre', con split() obtenemos el id*/
                const idUniversoAEditar = parseInt(alienDeluniverso["listaUniversos"].split("-")[0])
                nuevoAlien["idUniverso"] = idUniversoAEditar
                return await agregarAlienDB(nuevoAlien)

            case "Editar Alien":
                const listaAlienEditables = await mostrarTodosLosUniersos()
                const universoDeAlienAEditar = await inquirer.prompt([
                    {
                        type: 'list',
                        name: 'listaUniversos',
                        message: 'Seleccione un universo:',
                        choices: listaAlienEditables
                    }
                ])
                const listaAlienPorUniveso = await buscarAlienPorUniverso(universoDeAlienAEditar)
                const alienAEditar = await inquirer.prompt([
                    {
                        type: 'list',
                        name: 'listaAlien',
                        message: 'Seleccione un Alien:',
                        choices: listaAlienPorUniveso
                    },
                    {
                        type: 'list',
                        name: 'campoAEditar',
                        message: 'Seleccione el campo a editar:',
                        choices: ["Nombre de la especie", "Numero de ojos", "Color de piel", "Tienen Naves Galaxticas?"]
                    }
                ])
                /* ingredienteAEditar["listaIngredientes"] viene como 'id-nombre', con split() obtenemos el id*/
                const idAlienAEditar = parseInt(alienAEditar["listaAlien"].split("-")[0])
                switch (alienAEditar["campoAEditar"]) {
                    case "Nombre de la especie":
                        const nuevoNombreEspecie = await inquirer.prompt([
                            {
                                type: 'input',
                                name: 'nuevoNomEspecie',
                                message: 'Nuevo nombre de la especie:'
                            }
                        ])
                        return editarAlienDB(idAlienAEditar, 1, nuevoNombreEspecie["nuevoNomEspecie"])
                    case "Numero de ojos":
                        const nuevaNumeroOjos = await inquirer.prompt([
                            {
                                type: 'input',
                                name: 'nuevaNumeroOjos',
                                message: 'Nuevo numeros de Ojos:'
                            }
                        ])
                        return editarAlienDB(idAlienAEditar, 2, nuevaNumeroOjos["nuevaNumeroOjos"])
                    case "Color de piel":
                        const nuevoColorPiel = await inquirer.prompt([
                            {
                                type: 'list',
                                name: 'nuevoTipoColorPiel',
                                message: 'Seleccione:',
                                choices: tipoColorPiel
                            }
                        ])
                        return editarAlienDB(idAlienAEditar, 3, nuevoColorPiel["nuevoTipoColorPiel"])
                    case "Tienen Naves Galaxticas?":
                        const nuevaNavesGalaxticas = await inquirer.prompt([
                            {
                                type: 'confirm',
                                name: 'navesGalaxticas',
                                message: 'Tienen Naves Galaxticas?:',
                                default: false
                            }
                        ])
                        return editarAlienDB(idAlienAEditar, 4, nuevaNavesGalaxticas["navesGalaxticas"])
                    default:
                        break
                }
                break
            case "Eliminar Alien":
                const listaUniversosBorrables = await mostrarTodosLosUniersos()
                const universoDeAlienABorrar = await inquirer.prompt([
                    {
                        type: 'list',
                        name: 'listaUniversos',
                        message: 'Seleccione un Universo:',
                        choices: listaUniversosBorrables
                    }
                ])
                const listaAlienePorUniverso2 = await buscarAlienPorUniverso(universoDeAlienABorrar)
                const alienABorrar = await inquirer.prompt([
                    {
                        type: 'list',
                        name: 'listaAlien',
                        message: 'Seleccione un Alien:',
                        choices: listaAlienePorUniverso2
                    }
                ])
                const idAlienABorrar = parseInt(alienABorrar["listaAlien"].split("-")[0])
                return eliminarAlienDB(idAlienABorrar)
            case "Volver al menu":
                return await menuPrincipal()
            default:
                break
        }
    } catch (error) {
        console.log(error)
    }
}



//funciones
async function mostrarTodosLosUniersos() {
    try {
        const listaUniversos = await promesaLeerArchivo(pathUniverso)
        return listaUniversos["universos"]
            .map(actual => actual["id"] + "- " + actual["nombreUniverso"]).reverse()
    } catch (error) {
        console.log('error', error)
    }
}

async function agregaruniversoDB(nuevoUniverso) {
    try {
        const listaUniversos = await promesaLeerArchivo(pathUniverso)
        const idNuevoUniverso = listaUniversos["universos"][listaUniversos["universos"].length - 1].id
        nuevoUniverso.id = idNuevoUniverso + 1 // crea un nuevo campo 'id'
        listaUniversos["universos"].push(nuevoUniverso)
        await promesaEscribirArchivo(pathUniverso, listaUniversos)
        await menuPrincipal()
    } catch (error) {
        console.log('error', error)
    }
}

async function editarUniversoDB(idUniverso, campoAEditar, nuevoDatoUniverso) {
    try {
        console.log("idUniverso: " + idUniverso)
        const universoAEditar = await buscarUniversoPoridDB(idUniverso)
        const listaUniversosActualizadas = await promesaLeerArchivo(pathUniverso)
        const posicionUniversoActual = listaUniversosActualizadas["universos"].findIndex(
            universoActual => universoActual["id"] === idUniverso
        )
        /* El cambio se realiza según 'campoAEditar' enviado desde el menu */
        switch (campoAEditar) {
            case 1:
                universoAEditar["nombreUniverso"] = nuevoDatoUniverso
                break
            case 2:
                universoAEditar["nombreContelacion"] = nuevoDatoUniverso
                break
            case 3:
                universoAEditar["numeroPlanetas"] = nuevoDatoUniverso
                break
            case 4:
                universoAEditar["numeroSoles"] = nuevoDatoUniverso
                break
            case 5:
                universoAEditar["agujerosNegros"] = nuevoDatoUniverso
                break
            default:
                break
        }
        listaUniversosActualizadas["universos"].splice(posicionUniversoActual, 1, universoAEditar)
        await promesaEscribirArchivo(pathUniverso, listaUniversosActualizadas)
        await menuPrincipal()
    } catch (error) {
        console.log('error', error)
    }
}


async function buscarUniversoPoridDB(id) {
    try {
        const listaUniverso = await promesaLeerArchivo(pathUniverso)
        return listaUniverso["universos"]
            .find(universo => universo["id"] === id)
    } catch (error) {
        console.log('error', error)
    }
}


async function eliminarUniversoDB(idUniverso) {
    try {
        /* Elimina los ingredientes en cascada, filtrando los no tengan el idComida a borrar */
     //   const listaAlien = await promesaLeerArchivoDB(pathIngredientes)
    /*    listaIngredientes["ingredientes"] = listaIngredientes["ingredientes"]
            .filter(ing => ing["idComida"] !== idComida)
        await promesaEscribirArchivoDB(pathIngredientes, listaIngredientes)*/

        /* Finalmente elimina la comida */
        const listaUniversosActualizadas = await promesaLeerArchivo(pathUniverso)
        const indiceUniverso = listaUniversosActualizadas["universos"]
            .findIndex(universoAEliminar => universoAEliminar["id"] === idUniverso)
        listaUniversosActualizadas["universos"].splice(indiceUniverso, 1)
        await promesaEscribirArchivo(pathUniverso, listaUniversosActualizadas)
        await menuPrincipal()
    } catch (error) {
        console.log('error', error)
    }
}

//alien

/* Retorna una arreglo de todos los ingredientes disponibles */
async function mostrarTodosLosAlienDB() {
    try {
       // console.log("|___ Catálogo ingredientes ____|")
        const listaAlien = await promesaLeerArchivo(pathAlien)
        return listaAlien["alien"]
            .map(actual => actual["idAlien"] + "- " + actual["nombreEspecie"]).reverse()
            .forEach(alien => console.log(alien))
    } catch (error) {
        console.log('error', error)
    }
}



/* Imprime el arreglo de ingredientes correspondiente a un objeto comida */
async function desplegarAlienPorUniverso(universoParaAlien) {
    try {
        const listaAlienPorUniverso = await buscarAlienPoruniverso(universoParaAlien)
        return listaAlienPorUniverso.forEach(alien => console.log(alien))
    } catch (error) {
        console.log('error', error)
    }
}

/* Retorna un arreglo de ingredientes a partir de un objeto "id-nombreIngrediente" */
async function buscarAlienPoruniverso(universoParaAlien) {
    /* comidaParaIngrediente viene como 'id-nombre', con split() separamos el id y del nombre*/
    const idUniversoAMostrar = parseInt(universoParaAlien["listaUniverso"].split("-")[0]) // id
    console.log("Alienes del universo:", universoParaAlien["listaUniverso"].split("-")[1]) // nombre
    try {
        const listaAlienes = await promesaLeerArchivo(pathAlien)
        return listaAlienes["alien"]
            .filter(actual => actual["idUniverso"] === idUniversoAMostrar)
            .map(actualIng => actualIng["idAlien"] + "- " + actualIng["nombreEspecie"]).reverse()
    } catch (error) {
        console.log('error', error)
    }
}








async function main() {
    try
    {
        await menuPrincipal();
    }
    catch (error)
    {
        console.error(error);
    }

}

main().then(() => console.log("adios"));
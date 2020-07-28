
const fs = require('fs')
const inquirer = require('inquirer')
const pathUniverso = './Universo.json'
const universo = ["NombreUniverso", "NombreContelacion","NumeroPlanetas", "NumeroSoles", "AgujerosNegros"]

const pathAlien = './04_Ingredientes_DB.json' // DB Ingredientes
const alien = ["NombreEspecie", "NumeroOjos ", "NumeroPiernas ", "PoseeArmas", "PoseeNavesGalaxticas "]



function promesaLeerArchivo(pathUniverso)
{
    return new Promise(
        (resolve, reject) =>
        {
            fs.readFile(
                pathUniverso,
                'utf-8',
                (error, datoUniversoOAlien) =>
                {
                    if (error)
                    {
                        console.log("Error", error)
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




/*-*-*-*-*-*-*-*-*-*-* Funciones de gestión de comidas *-*-*-*-*-*-*-*-*-*-*/

/* Muestra el menú de las comidas y los entradas de texto (inputs) */
async function mostrarMenuUnierso() {
    try {
        const menuUniverso = await inquirer.prompt([
            {
                type: 'list',
                name: 'opcionMenu',
                message: 'Menú Comida.- Seleccione una opción:',
                choices: ["Mostrar Comidas", "Nueva comida", "Editar Comida", "Eliminar comida", "Volver al menu"]
            }
        ])
        switch (menuComida["opcionMenu"]) {
            case "Mostrar Comidas":
                console.log("|_______ Menú del día ________|")
                const listaComidas = await mostrarTodasLasComidas()
                listaComidas.forEach(comida => console.log(comida))
                console.log("|_____________________________|")
                return mostrarMenuComida()
            case "Nueva comida":
                const nuevaComida = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'nombreComida',
                        message: 'Nombre comida:'
                    },
                    {
                        type: 'list',
                        name: 'tipoComida',
                        message: 'Seleccione un tipo:',
                        choices: tipoComida
                    },
                    {
                        type: 'input',
                        name: 'nacionalidad',
                        message: 'Nacionalidad:'
                    },
                    {
                        type: 'number',
                        name: 'numeroPersonas',
                        message: 'Cantidad de personas:'
                    },
                    {
                        type: 'confirm',
                        name: 'picante',
                        message: 'Es picante?:',
                        default: true
                    }
                ])
                return await agregarComidaDB(nuevaComida)
            case "Editar Comida":
                const listaComidasEditables = await mostrarTodasLasComidas()
                const comidaAEditar = await inquirer.prompt([
                    {
                        type: 'list',
                        name: 'listaComidas',
                        message: 'Seleccione una comida',
                        choices: listaComidasEditables
                    },
                    {
                        type: 'list',
                        name: 'campoAEditar',
                        message: 'Seleccione el campo a editar:',
                        choices: ["Nombre", "Tipo de Comida", "NumeroPersonas", "Nacionalidad", "Picante?"]
                    }
                ])
                /* comidaAEditar["listaComidas"] viene como 'id-nombre', con split() obtenemos el id*/
                const idComidaAEditar = parseInt(comidaAEditar["listaComidas"].split("-")[0])
                switch (comidaAEditar["campoAEditar"]) {
                    case "Nombre":
                        const nuevoNombre = await inquirer.prompt([
                            {
                                type: 'input',
                                name: 'nuevoNomComida',
                                message: 'Nuevo nombre:'
                            }
                        ]) // campoAEditar: para decirle a la funcion editarComidaDB que propiedad debe editar
                        return editarComidaDB(idComidaAEditar, 1, nuevoNombre["nuevoNomComida"])
                    case "Tipo de Comida":
                        const nuevoTipoCom = await inquirer.prompt([
                            {
                                type: 'list',
                                name: 'nuevoTipoComida',
                                message: 'Seleccione un tipo:',
                                choices: tipoComida
                            }
                        ])
                        return editarComidaDB(idComidaAEditar, 2, nuevoTipoCom["nuevoTipoComida"])
                    case "NumeroPersonas":
                        const nuevoNumPer = await inquirer.prompt([
                            {
                                type: 'number',
                                name: 'nuevoNumPerComida',
                                message: 'Numero de personas:'
                            }
                        ])
                        return editarComidaDB(idComidaAEditar, 3, nuevoNumPer["nuevoNumPerComida"])
                    case "Nacionalidad":
                        const nuevaNacionalidad = await inquirer.prompt([
                            {
                                type: 'input',
                                name: 'nuevaNacComida',
                                message: 'Nacionalidad:'
                            }
                        ])
                        return editarComidaDB(idComidaAEditar, 4, nuevaNacionalidad["nuevaNacComida"])
                    case "Picante?":
                        const esPicante = await inquirer.prompt([
                            {
                                type: 'confirm',
                                name: 'esPicanteComida',
                                message: 'Es picante?:',
                                default: false
                            }
                        ])
                        return editarComidaDB(idComidaAEditar, 5, esPicante["esPicanteComida"])
                    default:
                        break
                }
                break
            case "Eliminar comida":
                const comidasBorrables = await mostrarTodasLasComidas()
                const comidaABorrar = await inquirer.prompt([
                    {
                        type: 'list',
                        name: 'listaComidas',
                        message: 'Seleccione una comida',
                        choices: comidasBorrables
                    }
                ])
                /* comidaABorrar["listaComidas"] viene como 'id-nombre', con split() obtenemos el id */
                const idComidaABorrar = parseInt(comidaABorrar["listaComidas"].split("-")[0])
                return eliminarComidaDB(idComidaABorrar)
            case "Volver al menu":
                return await mostrarMenuPrincipal()
            default:
                break
        }
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
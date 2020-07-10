const inquirer = require('inquirer');

async function main() {

    const respuesta = await inquirer.prompt([
        {
            type: 'input',
            name: 'apellido',
            message: 'Ingresa tu nombre'

        },
        {
            type: 'input',
            name: 'edad',
            massage: 'Ingresa tu edad'
        }
    ])
    console.log('respuesta', respuesta);
}

main();
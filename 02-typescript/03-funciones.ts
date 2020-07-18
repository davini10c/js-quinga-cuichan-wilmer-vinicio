function sumarNumeros(
    numerosInicial: number,
    ...numerosASumarse: number[]
):number {
    return numerosInicial;
}

sumarNumeros(1,2,3,4,5);

function imprimir(mensajes: string):void {
    console.log('hola'+ mensajes);
}

const arregloNumeros: number[] = [1,2,3];
const arregloNumerosDos: Array<number> = [1,2,3];
const arregloNumeroTres: (number | string | boolean)[] = [1,"a", true];
const arregloNumeroCuatro: Array<number | string | boolean> = [1,"a", true];
const arregloNumeroOTexto: number[] | string[] = [1,2];
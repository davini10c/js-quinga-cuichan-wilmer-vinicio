function sumarNumeros(numerosInicial) {
    var numerosASumarse = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numerosASumarse[_i - 1] = arguments[_i];
    }
    return numerosInicial;
}
sumarNumeros(1, 2, 3, 4, 5);
function imprimir(mensajes) {
    console.log('hola' + mensajes);
}
var arregloNumeros = [1, 2, 3];
var arregloNumerosDos = [1, 2, 3];
var arregloNumeroTres = [1, "a", true];
var arregloNumeroCuatro = [1, "a", true];
var arregloNumeroOTexto = [1, 2];

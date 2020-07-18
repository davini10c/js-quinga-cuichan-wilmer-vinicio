/*
Ejercicio
1) calcularImpuesto
Typar una funcion que reciba un parametro number impuesto, que devuelva el sueldo + sueldo*impuesto
2) estadoActual
Typar una funcion que no reciba parametros y devuelva 'AP' 'AF' o 'AT'
*/
var _this = this;
var juan = {
    nombre: 'Juan',
    apellido: 'Lopez',
    casado: 0,
    sueldo: 11.2,
    estado: 'BN',
    imprimirUsuario: function (mensaje) {
        return 'El mensaje es: ' + mensaje;
    },
    calcularImpuesto: function (impuesto) {
        return _this.sueldo + _this.sueldo * impuesto;
    },
    estadoActual: function () {
        switch (_this.estado) {
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    }
};

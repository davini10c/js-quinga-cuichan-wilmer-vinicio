/*
Ejercicio
1) calcularImpuesto
Typar una funcion que reciba un parametro number impuesto, que devuelva el sueldo + sueldo*impuesto
2) estadoActual
Typar una funcion que no reciba parametros y devuelva 'AP' 'AF' o 'AT'
*/

interface Usuario {
    nombre: string;
    apellido: string;
    edad?: number; // opcional
    sueldo?: number; // opcional
    casado: boolean | 0 | 1;
    estado: 'AC' | 'IN' | 'BN';
    // quiero que imprimirUsuario cuando se implemente
    // reciba un parametro mensaje: strign y devuelva un string
    imprimirUsuario: (mensaje: string) => string | 'BN';

    //ejercicio
    calcularImpuesto: (impuesto:number) => number;
    estadoActual: () => 'AP' | 'AF' | 'AT';
}



const juan : Usuario | number = {
    nombre: 'Juan',
    apellido: 'Lopez',
    casado: 0,
    sueldo: 11.2,
    estado: 'BN',
    imprimirUsuario: (mensaje:string) => {
        return 'El mensaje es: ' + mensaje;
    },
    calcularImpuesto: (impuesto:number) =>{
        return this.sueldo + this.sueldo * impuesto;
    },
    estadoActual: () => {
        switch (this.estado) {
            case 'AC':
                return 'AP';

            case 'IN':
                return 'AF';

            case 'BN':
                return 'AT';
        }
    }



};

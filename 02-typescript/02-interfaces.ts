

interface Usuario {
    nombre: string;
    apellido: string;
    edad?: number; //opcional
    sueldo?: number; //opcional
    casado: boolean |1 | 0;
    estado: 'AC' | 'IN'| 'BN';
    imprimirUsuario: (mensaje: string) =>string | 'BN';
    calcularImpuesto: (impuesto: number) => number;
    estadoActual: ()=> 'AP'| 'AF' | 'AT'
    //parametro numero impuesto, sueldo + sueldo * impuesto
    // estadoActual no reciba parametros, 'AP', 'AF', 'AT'
}


const  vinicio : Usuario={
    nombre: 'Vinicio',
    apellido:'Quinga',
    casado:0,
    sueldo:11.2,
    estado: 'BN',
    imprimirUsuario: (mensaje: string) =>{
            return 'El mensaje es:' + mensaje;
        },
    calcularImpuesto: impuesto =>
        {
            this.sueldo + this.sueldo * impuesto;
        },
    estadoActual: () =>
        {
            switch (this.estado) {

                case 'AC':
                    return 'AP';

                case 'IN':
                    return 'Af';

                case 'BN':
                    return 'At';
            }

        }
};

class Persona {
    public  nombre:string;
    public apellido:string;
    static nombreReferencial: string = 'Humano';
    protected nombreYApellido: string = '';
    constructor(
        nombreParametro:string,
        apellidoParametro:string,
    ) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
    }

    private mostrarNombreApellido()
    {
        return this.nombreYApellido;
    }
}

class Usuario extends Persona {
    constructor(
        nombreParametro:string,
        apellidoParametro:string,
        public cedula:string,
        public estadoCivil: string,
    ) {
        super(nombreParametro, apellidoParametro);
    }

}

const vinicio = new Usuario(
     'Vinicio',
    'Quinga',
   '1720898426',
    'soltero'
);

console.log(vinicio.nombre);
console.log(vinicio.apellido);
console.log(vinicio.cedula);
console.log(vinicio.estadoCivil);
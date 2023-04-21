export interface Cliente {
    id_cliente:string;
    nombre:string;
    apellido:string;
    correo:string;
    tarjeta:string;
}

export class Cliente implements Cliente {
    constructor() {
    };
}
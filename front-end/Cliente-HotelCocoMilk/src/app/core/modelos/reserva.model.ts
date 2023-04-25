export interface Reservacion {
    id_cliente: string;
    id_habitacion: number;
    fecha: any;
    fecha_entrada: any;
    fecha_salida: any;
    transaccion: number;
    eliminado: boolean;
}
export class Reservacion implements Reservacion {
    constructor() {
    };
}


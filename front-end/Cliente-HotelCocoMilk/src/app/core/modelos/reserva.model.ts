
export interface Reservacion {
    id_reserva: number;
    id_cliente: string;
    id_habitacion: number;
    fecha: Date;
    fecha_entrada: Date;
    fecha_salida: Date;
    transaccion: number;
}
export class Reservacion implements Reservacion {

    constructor() {
    };


}


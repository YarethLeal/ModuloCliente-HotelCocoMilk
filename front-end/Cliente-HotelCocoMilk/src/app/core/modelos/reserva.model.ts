export interface Reserva {
    numero_habitacion: number;
    id_tipo_habitacion: number;
    tipo: string;
    informacion: string;
    imagen: string;
    tarifa: number;
  
  }
  
  export class Reserva implements Reserva {
  
    constructor(public numero_habitacion: number) {
    };
  
  
  }
  
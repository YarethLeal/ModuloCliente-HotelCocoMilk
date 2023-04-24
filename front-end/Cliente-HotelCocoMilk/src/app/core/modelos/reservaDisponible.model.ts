export interface ReservacionDisponible {
    numero_habitacion: number;
    id_tipo_habitacion: number;
    tipo: string;
    informacion: string;
    imagen: string;
    tarifa: number;
  
  }
  
  export class ReservacionDisponible implements ReservacionDisponible {
  
    constructor(public numero_habitacion: number) {
    };
  
  
  }
  
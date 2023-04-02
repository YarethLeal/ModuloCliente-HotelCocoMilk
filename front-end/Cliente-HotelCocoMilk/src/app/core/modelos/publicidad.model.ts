export interface Publicidad {
  id_publicidad: number;
  imagen: string;
  destino: string;

}

export class Publicidad implements Publicidad {

  constructor(public Imagen: string, public Destino: string) {
  };


}

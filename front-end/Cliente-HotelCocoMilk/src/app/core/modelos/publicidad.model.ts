export interface Publicidad {
  ID: number;
  Imagen: string;
  Destino: string;

}

export class Publicidad implements Publicidad {

  constructor(public Imagen: string, public Destino: string) {
  };


}

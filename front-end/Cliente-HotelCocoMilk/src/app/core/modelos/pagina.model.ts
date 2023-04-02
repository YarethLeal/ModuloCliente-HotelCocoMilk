export interface Pagina {
    id_pagina: number;
    id_tipo_pagina: number;
    descripcion: string;
    imagen: string;
  }

  export class Pagina implements Pagina {

    constructor(public ID: number) {
    };
  
  
  }
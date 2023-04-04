import { Component } from '@angular/core';
import { Pagina } from 'src/app/core/modelos/pagina.model';
import { PaginaService } from 'src/app/core/servicios/pagina.service';

let dataPaginas: Pagina[];

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public descripcion: string;
  public galeria: Array<string>;
  public imagenPrincipal: string;
  constructor(private paginaService: PaginaService) {
    this.descripcion = "";
    this.imagenPrincipal = "";
    this.galeria = [];
    dataPaginas = [];
  }
  ngOnInit(): void {
    this.mostrarPagina("Sobre Nosotros");
  }
  mostrarPagina(buscar: string) {
    this.paginaService.mostrarPagina({ tipoPagina: buscar }).subscribe((data: Pagina[]) => {
      dataPaginas = data;
      this.descripcion = data[0].descripcion;
      this.galeria=data[0].imagen.split(",");
      this.imagenPrincipal = this.galeria[0];
    });
  }
  public open(imagen:string) {
    this.imagenPrincipal = imagen;
  }
}

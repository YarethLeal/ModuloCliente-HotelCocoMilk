import { Component } from '@angular/core';
import { Pagina } from 'src/app/core/modelos/pagina.model';
import { PaginaService } from 'src/app/core/servicios/pagina.service';

let dataPaginas: Pagina[];

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  public descripcion: string;
  constructor(private paginaService: PaginaService) {
    this.descripcion = "";
    dataPaginas = [];
  }
  ngOnInit(): void {
    this.mostrarPagina("Como llegar");
  }
  mostrarPagina(buscar: string) {
    this.paginaService.mostrarPagina({ tipoPagina: buscar }).subscribe((data: Pagina[]) => {
      dataPaginas = data;
      this.descripcion = data[0].descripcion;
    });
  }
}

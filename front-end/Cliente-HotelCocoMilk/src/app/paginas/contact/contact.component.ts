import { Component } from '@angular/core';
import { Pagina } from 'src/app/core/modelos/pagina.model';
import { PaginaService } from 'src/app/core/servicios/pagina.service';

let dataPaginas: Pagina[];

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public descripcion: string;
  constructor(private paginaService: PaginaService) {
    this.descripcion = "";
    dataPaginas = [];
  }
  ngOnInit(): void {
    this.mostrarPagina("Contactenos");
  }
  mostrarPagina(buscar: string) {
    this.paginaService.mostrarPagina({ tipoPagina: buscar }).subscribe((data: Pagina[]) => {
      dataPaginas = data;
      this.descripcion = data[0].descripcion;
    });
  }
}

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
  constructor(private paginaService: PaginaService) {
    //this.descripcion = "Lorem ipsum dolor sit amet, maiores ornare ac fermentum, imperdiet ut vivamus a, nam lectus at nunc. Cum quam euismod sem, semper ut potenti pellentesque quisque. In eget sapien sed, sit duis vestibulum ultricies, placerat morbi amet vel, nullam in in lorem vel. In molestie elit dui dictum, praesent nascetur pulvinar sed, in dolor pede in aliquam, risus nec error quis pharetra.";
    this.descripcion = "";
    dataPaginas =[];
  }
  ngOnInit(): void {
    this.mostrarPagina("Home");
    //this.mostrarPagina("Sobre Nosotros");
  }
   mostrarPagina(buscar: string) {
      this.paginaService.mostrarPagina({ tipoPagina: buscar }).subscribe((data: Pagina[]) => {
        dataPaginas = data;
        this.descripcion=data[0].descripcion;
        //this.imagen=data[0].imagen;
      });
  }
}

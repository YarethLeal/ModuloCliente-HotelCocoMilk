import { Component, OnInit  } from '@angular/core';
import { Pagina } from 'src/app/core/modelos/pagina.model';
import { PaginaService } from 'src/app/core/servicios/pagina.service';

@Component({
  selector: 'app-facilidades',
  templateUrl: './facilidades.component.html',
  styleUrls: ['./facilidades.component.css']
})
export class FacilidadesComponent implements OnInit{

 dataPaginas: Pagina[] =[];
  constructor(private paginaService: PaginaService) {

  }

  ngOnInit(): void {
    this.mostrarPagina("Facilidades");
  }

  mostrarPagina(buscar: string) {
    this.paginaService.mostrarPagina({ tipoPagina: buscar }).subscribe((data: Pagina[]) => {
      this.dataPaginas = data;
      this.dataPaginas.forEach((element: any)=>{
        element.imagen = 'data:image/jpg;base64,' + element.imagen;
      });
    });
}
}

import { Component, OnInit } from '@angular/core';
import { Pagina } from 'src/app/core/modelos/pagina.model';
import { PaginaService } from 'src/app/core/servicios/pagina.service';

let dataPaginas: Pagina[];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public id: number;
  public idTipoPagina: number;
  public descripcion: string;
  public imagen: string;



  constructor (private paginaService: PaginaService) {
    this.id=0;
    this.idTipoPagina=0;
    this.descripcion='';
    this.imagen='';
    dataPaginas =[];

  }


  ngOnInit(): void {
    this.mostrarPagina("Home");
  }

  mostrarPagina(buscar: string) {
      this.paginaService.mostrarPagina({ tipoPagina: buscar }).subscribe((data: Pagina[]) => {
        dataPaginas = data;
        this.descripcion=data[0].descripcion;
        this.imagen='data:image/jpg;base64,'+data[0].imagen;
      });
  }

}

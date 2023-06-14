import { Component } from '@angular/core';
import { Pagina } from 'src/app/core/modelos/pagina.model';
import { Galeria } from 'src/app/core/modelos/galeria.model';
import { PaginaService } from 'src/app/core/servicios/pagina.service';
import { GaleriaService } from 'src/app/core/servicios/galeria.service';

let dataPaginas: Pagina[];

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public descripcion: string;
  public dataGaleria: Galeria[] = [];
  public imagenPrincipal: string;
  constructor(private paginaService: PaginaService, private galeriaService: GaleriaService) {
    this.descripcion = "";
    this.imagenPrincipal = "";
    // this.galeria = [];
    dataPaginas = [];
  }
  ngOnInit(): void {
    this.mostrarPagina("Sobre Nosotros");
    this.mostrarGaleria();
  }
  mostrarPagina(buscar: string) {
    this.paginaService.mostrarPagina({ tipoPagina: buscar }).subscribe((data: Pagina[]) => {
      dataPaginas = data;
      this.descripcion = data[0].descripcion;
    });
  }
  mostrarGaleria(){
    this.galeriaService.listarGaleria().subscribe((data: Galeria[]) => {
      this.dataGaleria = data;
      this.imagenPrincipal=data[0].imagen;
    });
  }
  public open(imagen:string) {
    this.imagenPrincipal = imagen;
  }
}

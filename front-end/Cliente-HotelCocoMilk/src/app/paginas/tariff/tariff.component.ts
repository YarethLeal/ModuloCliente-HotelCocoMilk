import { Component, OnInit } from '@angular/core';
import { TipoHabitacion } from 'src/app/core/modelos/tipoHabitacion.model';
import { TipoHabitacionService } from 'src/app/core/servicios/tipoHabitacion.service';

//let dataTipoHabitacion: TipoHabitacion[];

@Component({
  selector: 'app-tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.css']
})
export class TariffComponent implements OnInit{

  public id_habitacion: number;
  public imagen: string;
  public tipo: string;
  public informacion: string;
  public  tarifa: number;

  constructor (private tipoHabitacionService: TipoHabitacionService) {
    this.id_habitacion=0;
    this.imagen='';
    this.tipo='';
    this.informacion='';
    this.tarifa=0;
   // dataTipoHabitacion=[];
  }
  

  ngOnInit(): void {
    this.listarTipoHabitacion();
   // this.obtenerTipoDeCambioXML();
  }

  dataTipoHabitacion: any = [];

  listarTipoHabitacion() {
    this.tipoHabitacionService.listarTipoHabitacion().subscribe((data: TipoHabitacion[]) => {
      this.dataTipoHabitacion = data;
     /* this.informacion=data[0].informacion;
      this.imagen=data[0].imagen;*/
    });
}

obtenerTipoDeCambioXML(){
  this.tipoHabitacionService.obtenerTipoDeCambioXML().subscribe((respuesta: any) => {
    //this.dialogoNotificacion(respuesta);
    console.log(respuesta);
  });
}


}





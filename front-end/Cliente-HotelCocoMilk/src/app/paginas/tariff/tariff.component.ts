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
  public cambio: boolean;
  public tipoMoneda: boolean;
  public simbolo: string;

  constructor (private tipoHabitacionService: TipoHabitacionService) {
    this.id_habitacion=0;
    this.imagen='';
    this.tipo='';
    this.informacion='';
    this.tarifa=0;
    this.cambio=true;
    this.simbolo='₡';
    this.tipoMoneda=false;
   // dataTipoHabitacion=[];
  }


  ngOnInit(): void {
    this.listarTipoHabitacion();
    this.obtenerTipoDeCambioXML();
  }

  dataTipoHabitacion: any = [];

  listarTipoHabitacion() {
    this.tipoHabitacionService.listarTipoHabitacion().subscribe((data: TipoHabitacion[]) => {
      this.dataTipoHabitacion = data;
      this.dataTipoHabitacion.forEach((element: any)=>{
        element.imagen ='data:image/jpg;base64,' + element.imagen;
      });
     /* this.informacion=data[0].informacion;
      this.imagen=data[0].imagen;*/
    });
}

obtenerTipoDeCambioXML(){
  this.tipoHabitacionService.obtenerTipoDeCambioXML().subscribe((respuesta: any) => {
    //this.dialogoNotificacion(respuesta);
    console.log();


    if(this.tipoMoneda==true && this.cambio==true){
      for (let i = 0; i < this.dataTipoHabitacion.length; i++) {
        this.dataTipoHabitacion[i].tarifa=(this.dataTipoHabitacion[i].tarifa/respuesta);
        this.cambio=false;
        this.simbolo='$';
      }
    }
    if(this.tipoMoneda==false && this.cambio==false){
      for (let i = 0; i < this.dataTipoHabitacion.length; i++) {
        this.dataTipoHabitacion[i].tarifa=(this.dataTipoHabitacion[i].tarifa*respuesta);
      }
      this.cambio=true;
      this.simbolo='₡';
    }
   // this.tarifa=this.tarifa+respuesta;
   // this.dataTipoHabitacion[0].tarifa=this.dataTipoHabitacion[0].tarifa+respuesta;
  });
}


}





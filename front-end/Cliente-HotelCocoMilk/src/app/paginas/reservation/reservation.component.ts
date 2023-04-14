import { Component, OnInit } from '@angular/core';
import { TipoHabitacion } from 'src/app/core/modelos/tipoHabitacion.model';
import { TipoHabitacionService } from 'src/app/core/servicios/tipoHabitacion.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit{

  public fechaInicio: Date;
  public fechaFinal: Date;

  constructor (private tipoHabitacionService: TipoHabitacionService) {
    this.fechaInicio=new Date();
    this.fechaFinal=new Date();
    
  }

  ngOnInit(): void {
    this.listarTipoHabitacion();
    console.log(this.fechaInicio);
  }

  dataTipoHabitacion: any = [];

  listarTipoHabitacion() {
    this.tipoHabitacionService.listarTipoHabitacion().subscribe((data: TipoHabitacion[]) => {
      this.dataTipoHabitacion = data;
    });
}

}

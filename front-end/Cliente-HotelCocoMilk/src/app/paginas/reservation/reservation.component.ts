
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/core/modelos/reserva.model';
import { TipoHabitacion } from 'src/app/core/modelos/tipoHabitacion.model';
import { ReservaService } from 'src/app/core/servicios/reserva.service';
import { TipoHabitacionService } from 'src/app/core/servicios/tipoHabitacion.service';
import { ModalReservacionComponent } from 'src/app/core/componentes/modal-reservacion/modal-reservacion.component';
declare let $: any;
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit{

  public fechaInicio: string | null;
  public fechaFinal: string | null;
  public tipoSeleccionado: string;
  reservate: boolean= false;

  constructor (private tipoHabitacionService: TipoHabitacionService, private reservaService: ReservaService, private datePipe: DatePipe) {
    this.fechaInicio= this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.fechaFinal=this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.tipoSeleccionado= "";
  }

  ngOnInit(): void {
    this.listarTipoHabitacion();
  }

  dataTipoHabitacion: any = [];
  dataHabitacionReserva: any = [];

  listarTipoHabitacion() {
    this.tipoHabitacionService.listarTipoHabitacion().subscribe((data: TipoHabitacion[]) => {
      this.dataTipoHabitacion = data;
    });
  }

  listarHabitacionReserva(fechaLlegadaTemp: any,fechaSalidaTemp: any,tipoHabitacionTemp: any){
    const fechaInicialforma= this.datePipe.transform(fechaLlegadaTemp, 'dd/MM/yyyy');
    const fechaFinalforma= this.datePipe.transform(fechaSalidaTemp, 'dd/MM/yyyy');
    if(tipoHabitacionTemp!=""){
    this.reservaService.listarHabitacionReserva({fechaLlegada: fechaInicialforma, fechaSalida: fechaFinalforma,tipoHabitacion: tipoHabitacionTemp}).subscribe((data: Reserva) => {
      this.dataHabitacionReserva = data;
      console.log(data);
      if(data.numero_habitacion==null){
        $('#modal-noHabitacion').modal('show');
        //jQuery('#modal-noHabitacion').modal('show'); 
        var prueba = document.getElementById('#modal-noHabitacion');

      }else{
      this.verReserva()}
    });
  }
  }

  verReserva() {
    return (this.reservate = true);
  }
}

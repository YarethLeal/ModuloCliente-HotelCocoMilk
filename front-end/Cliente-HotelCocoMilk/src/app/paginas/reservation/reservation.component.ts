
import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TipoHabitacion } from 'src/app/core/modelos/tipoHabitacion.model';
import { ReservaService } from 'src/app/core/servicios/reserva.service';
import { TipoHabitacionService } from 'src/app/core/servicios/tipoHabitacion.service';
import { ModalReservacionComponent } from 'src/app/core/componentes/modal-reservacion/modal-reservacion.component';
import { Cliente } from 'src/app/core/modelos/cliente.model';
import { NgForm } from '@angular/forms';
import { ReservacionDisponible } from "src/app/core/modelos/reservaDisponible.model";
import { Reservacion } from 'src/app/core/modelos/reserva.model';
declare let $: any;

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  cliente: Cliente = new Cliente();
  reserva: Reservacion = new Reservacion();
  public fechaInicio: string | null;
  public fechaFinal: string | null;
  public tipoSeleccionado: string;
  reservate: boolean = false;

  constructor(private tipoHabitacionService: TipoHabitacionService, private reservaService: ReservaService, private datePipe: DatePipe) {
    this.fechaInicio = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.fechaFinal = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.tipoSeleccionado = "";
    this.reserva.eliminado = false;
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

  listarHabitacionReserva(fechaLlegadaTemp: any, fechaSalidaTemp: any, tipoHabitacionTemp: any) {
    const fechaInicialforma = this.datePipe.transform(fechaLlegadaTemp, 'dd/MM/yyyy');
    const fechaFinalforma = this.datePipe.transform(fechaSalidaTemp, 'dd/MM/yyyy');
    if (tipoHabitacionTemp != "") {
      this.reservaService.listarHabitacionReserva({ fechaLlegada: fechaInicialforma, fechaSalida: fechaFinalforma, tipoHabitacion: tipoHabitacionTemp }).subscribe((data: ReservacionDisponible) => {
        this.dataHabitacionReserva = data;
        this.dataHabitacionReserva.imagen = 'data:image/jpg;base64,' +  this.dataHabitacionReserva.imagen;
        //console.log(data);
        if (data.numero_habitacion == null) {
          this.error();
        } else {
          this.reserva.id_habitacion = data.numero_habitacion;
          this.reserva.fecha_entrada = this.datePipe.transform(fechaLlegadaTemp, 'yyyy-MM-dd');
          //console.log(this.reserva.fecha_entrada);
          this.reserva.fecha_salida = this.datePipe.transform(fechaSalidaTemp, 'yyyy-MM-dd');
          this.reserva.fecha = this.datePipe.transform(new Date(), 'yyyy-MM-dd')
          this.reserva.transaccion = this.dataHabitacionReserva.tarifa;
          this.verReserva()
        }
      });
    }
  }

  verReserva() {
    return (this.reservate = true);
  }

  confirmacion() {
    ModalReservacionComponent.prototype.registro(this.cliente, this.reserva);
    
  }
  error() {
    ModalReservacionComponent.prototype.error();
  }

  

  hideMessageFlag: boolean = true;

  showMessage() {
    this.hideMessageFlag = false;
  }

  hideMessage() {
    this.hideMessageFlag = true;
  }
}

import { Component, Input } from '@angular/core';
import { Cliente } from 'src/app/core/modelos/cliente.model';
import { Reservacion } from '../../modelos/reserva.model';
import { ReservaService } from '../../servicios/reserva.service';
import { NgForm } from '@angular/forms';

declare let $: any;
@Component({
  selector: 'app-modal-reservacion',
  templateUrl: './modal-reservacion.component.html',
  styleUrls: ['./modal-reservacion.component.css']
})
export class ModalReservacionComponent {
  public textoCorreo: string;
  tipoComponente: number = 0;
  @Input() cliente: Cliente = new Cliente();
  @Input() reserva: Reservacion = new Reservacion();
  constructor(private reservaService: ReservaService) {
    this.textoCorreo = "";
  }

  registro(clienteParam: Cliente, reservaParam: Reservacion) {
    this.cliente = clienteParam;
    this.reserva = reservaParam;
    console.log(this.reserva)
    if (this.cliente.nombre != undefined && this.cliente.nombre != null) {
      $('#modal-confirmacion').modal('show');
      console.log(this.cliente);
    }
  }
  realizarReserva() {
    this.reserva.id_cliente = this.cliente.id_cliente;
    this.reservaService.registrarCliente(this.cliente).subscribe((data: string) => {
      console.log(data);
      console.log(this.reserva);
      this.reservaService.registrarReserva(this.reserva).subscribe((data: string) => {
        console.log(data);
        if(data=="Reserva Registrada"){
            this.reservaService.envioCorreo(this.cliente).subscribe((data: string) => {
              console.log(data);
              if(data!="Correo Enviado"){
                this.textoCorreo = "";
              }else{
                this.textoCorreo = "Acabamos de enviar esta información a la dirección de "+ this.cliente.correo + " para mayor facilidad.";
              }
            });
        $('#modal-reservaRealizada').modal('show');
        $('#modal-confirmacion').modal('hide');

      }else{
        $('#modal-noHabitacion').modal('show');
        $('#modal-confirmacion').modal('hide');
      }

      });
    });

  }

  error() {
    $('#modal-noHabitacion').modal('show');
  }

}

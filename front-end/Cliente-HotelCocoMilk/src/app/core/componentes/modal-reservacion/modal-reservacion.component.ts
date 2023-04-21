import { Component } from '@angular/core';
import { Cliente } from 'src/app/core/modelos/cliente.model';
import { NgForm } from '@angular/forms';

declare let $: any;
@Component({
  selector: 'app-modal-reservacion',
  templateUrl: './modal-reservacion.component.html',
  styleUrls: ['./modal-reservacion.component.css']
})
export class ModalReservacionComponent {
  tipoComponente: number = 0;
  cliente: Cliente = new Cliente();
  public registro(clienteParam: Cliente) {
    this.cliente = clienteParam;
    console.log(this.cliente);
    if (this.cliente.nombre != undefined && this.cliente.nombre != null) {
      //window.location.reload();
      //$('#modal-confirmacion').modal('show');
      $('#modal-confirmacion').on(function () {
        location.reload();
        $('#modal-confirmacion').modal('show');
      });
      console.log(this.cliente);
    }
  }


}

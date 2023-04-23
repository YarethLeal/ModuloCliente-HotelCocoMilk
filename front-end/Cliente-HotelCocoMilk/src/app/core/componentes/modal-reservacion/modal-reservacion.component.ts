import { Component, Input } from '@angular/core';
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
  @Input() cliente: Cliente = new Cliente();

  constructor() {
    
  }

  public registro(clienteParam: Cliente) {
    this.cliente = clienteParam;
    if (this.cliente.nombre != undefined && this.cliente.nombre != null) {
      $('#modal-confirmacion').modal('show');
      console.log(this.cliente);
    }
  }

  error() {
    $('#modal-noHabitacion').modal('show');
  }

}

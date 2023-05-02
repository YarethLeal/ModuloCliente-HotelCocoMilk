import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError, retry, catchError } from "rxjs";
import { TipoHabitacion } from "../modelos/tipoHabitacion.model";
import { Utils } from "../utilidades/util";
import { environment } from "src/environments/environment";
import { ReservacionDisponible } from "../modelos/reservaDisponible.model";
import { Reservacion } from "../modelos/reserva.model";
import { Cliente } from "../modelos/cliente.model";

@Injectable({
  providedIn: 'root'
})

export class ReservaService {

  urlAPI: string = environment.urlAPI;
  constructor(private http: HttpClient) {
    console.log('Servicio HTTP');
  }

  //respuesta tipo string
  httpOptions1 = {
    headers: new HttpHeaders({
      "mimeType": "multipart/form-data",
      "Access-Control-Allow-Origin": "*"
    }),
    withCredentials: false,
    responseType: 'text' as 'json'
  };
  // respuesta tipo json
  httpOptions2 = {
    headers: new HttpHeaders({
      "mimeType": "multipart/form-data",
      "Access-Control-Allow-Origin": "*"
    }),
    withCredentials: false
  };

  listarHabitacionReserva(data: any): Observable<ReservacionDisponible> {
    return this.http.post<ReservacionDisponible>(this.urlAPI + 'listarHabitacionReserva', Utils.getFormData(data),this.httpOptions2);
  }
  registrarReserva(data: any): Observable<any> {
    return this.http.post(this.urlAPI + 'registrarReserva', Utils.getFormData(data),this.httpOptions1);
  }
  registrarCliente(data: any): Observable<any> {
    return this.http.post(this.urlAPI + 'registarCliente', Utils.getFormData(data),this.httpOptions1);
  }
  envioCorreo(data: any): Observable<any> {
    return this.http.post(this.urlAPI + 'envioCorreo', Utils.getFormData(data),this.httpOptions1);
  }
}

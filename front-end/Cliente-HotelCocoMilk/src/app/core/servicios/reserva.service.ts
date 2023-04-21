import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError, retry, catchError } from "rxjs";
import { TipoHabitacion } from "../modelos/tipoHabitacion.model";
import { Utils } from "../utilidades/util";
import { environment } from "src/environments/environment";
import { ReservacionDisponible } from "../modelos/reserva.model";

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

}
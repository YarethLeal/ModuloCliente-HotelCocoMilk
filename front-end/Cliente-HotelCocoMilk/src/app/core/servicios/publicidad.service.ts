import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Publicidad } from '../modelos/publicidad.model';
import { Observable, throwError, retry, catchError } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PublicidadService {
  urlAPI: string = environment.urlAPI;
  constructor(private http: HttpClient) { }
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

  getPublicidad(): Observable<Publicidad[]> {
    return this.http.get<Publicidad[]>(this.urlAPI + "mostrarImagenPublicidad", this.httpOptions2);
  }
}

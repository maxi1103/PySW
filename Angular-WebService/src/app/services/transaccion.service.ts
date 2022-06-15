import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  constructor(private _http:HttpClient) { }
  
  altaTransaccion(transaccion:Transaccion):Observable<any>{
    const httpOptions ={
      header: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams({})
    };

    return this._http.post("http://localhost:3000/api/transaccion/createTransaccion/",{monedaOrigen: transaccion.monedaOrigen,cantidadOrigen: transaccion.cantidadOrigen,monedaDestino: transaccion.monedaDestino,cantidadDestino: transaccion.cantidadDestino,emailCliente: transaccion.emailCliente,tasaConversion:transaccion.tasaConversion},httpOptions);
  }
  getTransacciones():Observable<any>{
    const httpOptions ={
      header: new HttpHeaders({
      }),
      params: new HttpParams({})
    };
    return this._http.get("http://localhost:3000/api/transaccion/getTransacciones/",httpOptions);
  }
  getTransaccionesCliente(moneda:string):Observable<any>{
    const httpOptions ={
      header: new HttpHeaders({
      }),
      params: new HttpParams({
        
      })
    };
    return this._http.get("http://localhost:3000/api/transaccion/getTransacciones/"+moneda,httpOptions);
  }
  getTransaccionesMoneda(moneda:string):Observable<any>{
    const httpOptions ={
      header: new HttpHeaders({
      }),
      params: new HttpParams({})
    };
    return this._http.get("http://localhost:3000/api/transaccion/getTransaccionMoneda/"+moneda,httpOptions);
  }
  
}

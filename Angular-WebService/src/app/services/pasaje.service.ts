import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pasaje } from '../models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {

  constructor(private _http:HttpClient) { }

  getPasajes():Observable<any>{
    const httpOptions ={
      header: new HttpHeaders({
      }),
      params: new HttpParams({})
    };
    return this._http.get("http://localhost:3000/api/pasaje/getPasajes/",httpOptions);
  }
  deletePasaje(_id:string):Observable<any>{
    const httpOptions ={
      header: new HttpHeaders({
      }),
      params: new HttpParams({})
    };
    return this._http.delete("http://localhost:3000/api/pasaje/deletePasaje/"+_id,httpOptions);
  }
  getPasajeCategoria(categoria:string):Observable<any>{
    const httpOptions ={
      header: new HttpHeaders({
      }),
      params: new HttpParams({})
    };
    return this._http.get("http://localhost:3000/api/pasaje/getPasajeros/"+categoria,httpOptions);
  }
  altaPasaje(pasaje:Pasaje):Observable<any>{
    const httpOptions ={
      header: new HttpHeaders({
        'Content-Type':'application/json' 
      }),
      params: new HttpParams({})
    };
    return this._http.post("http://localhost:3000/api/pasaje/createPasaje/",{precioPasaje: pasaje.precioPasaje,categoriaPasajero: pasaje.categoriaPasajero,fechaCompra: pasaje.fechaCompra,pasajero: pasaje.pasajero},httpOptions);
  }
  updatePasaje(pasaje:Pasaje):Observable<any>{
    const httpOptions ={
      header: new HttpHeaders({
        'Content-Type':'application/json' 
      }),
      params: new HttpParams({})
    };
    return this._http.put("http://localhost:3000/api/pasaje/updatePasaje/"+pasaje._id,{_id: pasaje._id,precioPasaje: pasaje.precioPasaje,categoriaPasajero: pasaje.categoriaPasajero,fechaCompra: pasaje.fechaCompra,pasajero: pasaje.pasajero},httpOptions);
  }
  getPasajeros():Observable<any>{
    const httpOptions ={
      header: new HttpHeaders({
      }),
      params: new HttpParams({})
    };
    return this._http.get("http://localhost:3000/api/persona/getPersonas/",httpOptions);
  }
  getPasaje(_id:string):Observable<any>{
    const httpOptions ={
      header: new HttpHeaders({
      }),
      params: new HttpParams({})
    };
    return this._http.get("http://localhost:3000/api/pasaje/getPasaje/"+_id,httpOptions);
  }
}

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private _http:HttpClient) { }
  public getLibrosDestacados():Observable<any>{
    const httpOptions = {
      header: new HttpHeaders({}),
      params: new HttpParams({})
    };
    

    return this._http.get("http://localhost:3000/api/libro/destacados/",httpOptions);
  }
  public saveLibro(libro:Libro):Observable<any>{
    const httpOptions ={
      header: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams({})
    };

    return this._http.post("http://localhost:3000/api/libro/createLibro/",{titulo: libro.titulo,descripcion: libro.descripcion,imagen: libro.imagen,stock: libro.stock,destacado: libro.destacado},httpOptions);
  }
}

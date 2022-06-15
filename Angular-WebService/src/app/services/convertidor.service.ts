import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConvertidorService {

  constructor(private _http:HttpClient) { }

  /*public getPrice(from:string,to:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com',
      'X-RapidAPI-Key': 'f2a83accc7msh1fff55e395548bbp12bc5ajsnd6ffe916e793'
      }),
      params: {'from':from,'to':to}
      }
      

      return this._http.get("https://currency-exchange.p.rapidapi.com/exchange", httpOptions);
  }*/
  public convert(from:string,to:string,q:string):Observable<any>{
    const httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com',
      'X-RapidAPI-Key': 'f2a83accc7msh1fff55e395548bbp12bc5ajsnd6ffe916e793'
      }),
      }
      const body = new HttpParams()
      .set('from-value', q)
      .set('from-type', from)
      .set('to-type', to);
      return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert", body,httpOptions);
  }
}

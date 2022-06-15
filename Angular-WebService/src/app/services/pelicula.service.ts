import { HttpClient, HttpHeaders, HttpParams,HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private _http:HttpClient) {}
  
   /* public searchPeliculas(buscar:string):Observable<any>{

      const httpOptions = {
        headers: new HttpHeaders({
        'X-RapidAPI-Host': 'filmaffinity-unofficial.p.rapidapi.com',
        'X-RapidAPI-Key': 'f2a83accc7msh1fff55e395548bbp12bc5ajsnd6ffe916e793'
        }),
        params: {'query':buscar,'lang':'es'}
        }
        
       
       
        
        return this._http.get("https://filmaffinity-unofficial.p.rapidapi.com/movie/search/", httpOptions);
    }
    public getPelicula(id:number):Observable<any>{
      const httpOptions = {
        headers: new HttpHeaders({
        'X-RapidAPI-Host': 'filmaffinity-unofficial.p.rapidapi.com',
        'X-RapidAPI-Key': 'f2a83accc7msh1fff55e395548bbp12bc5ajsnd6ffe916e793'
        }),
        params: {'lang':'es','id':id}
        }
   
        return this._http.get("https://filmaffinity-unofficial.p.rapidapi.com/movie/detail/", httpOptions);
    }*/
    public getpelicula(page:number):Observable<any>{
      const httpOptions = {
        headers: new HttpHeaders({
        'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
        'X-RapidAPI-Key': 'f2a83accc7msh1fff55e395548bbp12bc5ajsnd6ffe916e793'
        }),
        params: {'page':page}
        }

      return this._http.get("https://movies-app1.p.rapidapi.com/api/movies",httpOptions);
    }
    
  
}

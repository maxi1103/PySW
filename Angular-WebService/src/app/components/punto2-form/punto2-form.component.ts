import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { ConvertidorService } from 'src/app/services/convertidor.service';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-punto2-form',
  templateUrl: './punto2-form.component.html',
  styleUrls: ['./punto2-form.component.css']
})
export class Punto2FormComponent implements OnInit {
  monedas:{ nombre:string, value:number}[]=[];
  from!:string;
  to!:string;
  q!:string;
  result!:string;
  transaccion: Transaccion;
  constructor(private convertidorService:ConvertidorService,private transaccionService:TransaccionService) { 
    this.transaccion= new Transaccion();
  }

  ngOnInit(): void {
  }
  altaTransaccion(){
   this.transaccionService.altaTransaccion(this.transaccion).subscribe(
    result=>{
      console.log(result);
      
    },
    error=>{
      console.log(error);
    }
   )
   alert("Alta con exito");
  }

  convertir(){
    this.convertidorService.convert(this.transaccion.monedaOrigen,this.transaccion.monedaDestino,this.transaccion.cantidadOrigen.toString()).subscribe(
      result=>{
        this.transaccion.cantidadDestino=+result.result;
        this.convertirTasa();
        
      },
      error=>{
        alert("Error"+error);
      }
    )
  }  
  convertirTasa(){
    this.convertidorService.convert(this.transaccion.monedaOrigen,this.transaccion.monedaDestino,"1").subscribe(
      result=>{
        this.transaccion.tasaConversion=+result.result;
        this.altaTransaccion();
      },
      error=>{
        alert("Error"+error);
      }
    )
  } 
  /* getPrecio(){
    this.convertidorService.getPrice("USD","ARS").subscribe(
      result=>{
        this.monedas.push({nombre: 'usdtoars',value:result});
      },
      error=>{
        alert("error"+error);
      }
    )
    this.convertidorService.getPrice("ARS","USD").subscribe(
      result=>{
        this.monedas.push({nombre: 'arstousd',value:result});
      },
      error=>{
        alert("error"+error);
      }
    )
    this.convertidorService.getPrice("USD","EUR").subscribe(
      result=>{
        this.monedas.push({nombre: 'usdtoeur',value:result});
      },
      error=>{
        alert("error"+error);
      }
    )
    this.convertidorService.getPrice("EUR","USD").subscribe(
      result=>{
        this.monedas.push({nombre: 'eurtousd',value:result});
      },
      error=>{
        alert("error"+error);
      }
    )
    this.convertidorService.getPrice("ARS","EUR").subscribe(
      result=>{
        this.monedas.push({nombre: 'arstoeur',value:result});
      },
      error=>{
        alert("error"+error);
      }
    )
    this.convertidorService.getPrice("EUR","ARS").subscribe(
      result=>{
        this.monedas.push({nombre: 'eurtoars',value:result});
      },
      error=>{
        alert("error"+error);
      }
    ) */
}

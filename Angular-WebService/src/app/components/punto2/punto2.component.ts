import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {
transaccion!:Transaccion;
transacciones:Array<Transaccion>=[];
moneda!:string;
  constructor(private transaccionService:TransaccionService) {
    this.transacciones= new Array<Transaccion>();
   }

  ngOnInit(): void {
  }
  getTransacciones(){
    this.transacciones= new Array<Transaccion>();
    this.transaccionService.getTransacciones().subscribe(
      result=>{
        this.transaccion= new Transaccion();
        result.forEach((element:any)=>{
          Object.assign(this.transaccion,element);
          this.transacciones.push(this.transaccion);
          this.transaccion= new Transaccion();
        });
      },
      error=>{
          console.log(error);
        }
      
    )
  }
  getTransaccionesMoneda(){
    this.transacciones= new Array<Transaccion>();
    this.transaccionService.getTransaccionesMoneda(this.moneda).subscribe(
      result=>{
        this.transaccion= new Transaccion();
        result.forEach((element:any)=>{
          Object.assign(this.transaccion,element);
          this.transacciones.push(this.transaccion);
          this.transaccion= new Transaccion();
        });
      },
      error=>{
        console.log(error);
      }
    )
  }
}

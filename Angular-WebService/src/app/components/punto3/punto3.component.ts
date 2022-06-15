import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pasaje } from 'src/app/models/pasaje';
import { PasajeService } from 'src/app/services/pasaje.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {
  pasajes:Array<Pasaje>=[];
  pasaje:Pasaje;
  categoria!:string;
  constructor(private pasajeService:PasajeService,private router:Router) { 
    this.pasajes= new Array();
    this.pasaje=new Pasaje();
    this.getPasajes();
  }

  ngOnInit(): void {
  } 

  getPasajes(){
    this.pasajes= new Array();
    this.pasajeService.getPasajes().subscribe(
      result=>{
        result.forEach((element:any)=>{
          Object.assign(this.pasaje,element);
          this.pasajes.push(this.pasaje);
          this.pasaje=new Pasaje();
        });
      },
      error=>{
        console.log(error);
      }
    )
  }
  getPasajesCategoria(){
    this.pasajes= new Array();
    this.pasajeService.getPasajeCategoria(this.categoria).subscribe(
      result=>{
        result.forEach((element:any)=>{
          Object.assign(this.pasaje,element);
          this.pasajes.push(this.pasaje);
          this.pasaje=new Pasaje();
        });
      },
      error=>{
        console.log(error);
      }
    )
  }
  eliminarPasaje(pasaje:Pasaje){
    this.pasajeService.deletePasaje(pasaje._id).subscribe(
      result=>{
        alert("Pasaje Borrado");
        console.log(result);
        this.getPasajes();
      },
      error=>{
        console.log(error);
      }
    )
    
  }
  editarPasaje(pasaje:Pasaje){
    this.router.navigate(['punto3-form',pasaje._id]);
  }


}

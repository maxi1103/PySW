import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pasaje } from 'src/app/models/pasaje';
import { Persona } from 'src/app/models/persona';
import { PasajeService } from 'src/app/services/pasaje.service';

@Component({
  selector: 'app-punto3-form',
  templateUrl: './punto3-form.component.html',
  styleUrls: ['./punto3-form.component.css']
})
export class Punto3FormComponent implements OnInit {
pasaje:Pasaje;
accion="";
pasajeros:Array<Persona>=[];
persona:Persona;
  constructor(private pasajeService:PasajeService,private activatedRoute:ActivatedRoute) { 
    this.pasaje= new Pasaje();
    this.persona=new Persona();
    this.pasajeros= new Array<Persona>();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params['id']==0){
        this.accion="new";
        this.getPasajeros();
      }else{
        this.accion="update";
        this.cargarPasaje(params['id']);
        this.getPasajeros();
      }
    });
  }
  cargarPasaje(id:string){
    this.pasajeService.getPasaje(id).subscribe(
      result=>{
        this.pasaje= new Pasaje();
        Object.assign(this.pasaje,result);
        this.pasaje.pasajero=this.pasajeros.find((item)=>(item._id==this.pasaje.pasajero._id))!;
      },
      error=>{
        console.log(error);
      }
    )
  }
  getPasajeros(){
    this.pasajeService.getPasajeros().subscribe(
      result=>{
        result.forEach((element:any)=>{
          this.persona=new Persona();
          Object.assign(this.persona,element);
          this.pasajeros.push(this.persona);
        });
      },
      error=>{
        console.log(error);
      }
    )
  }
  altaPasaje(){
    this.pasajeService.altaPasaje(this.pasaje).subscribe(
      result=>{
        alert("Pasaje dado de alta");
        console.log(result);
        this.pasaje= new Pasaje();
      },
      error=>{
        console.log(error);
      }
    )
  }
  actualizarPasaje(){
    this.pasajeService.updatePasaje(this.pasaje).subscribe(
      result=>{
        alert("Pasaje Actualizado");
        console.log(result);
        this.pasaje= new Pasaje();
      },
      error=>{
        console.log(error);
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  libros:Array<Libro>=[];
  libro:Libro= new Libro();
  indice:number=0;
  constructor(private libroService:LibroService) { 
    this.libros= new Array<Libro>();
    this.iniciar();
    console.log(this.libros);
  }

  ngOnInit(): void {
  }
  iniciar(){
    this.getDestacados();  
  
  }
  getDestacados(){
    
    this.libroService.getLibrosDestacados().subscribe(
      result=>{
        
        var book= new Libro();
        
     /*  while(result[this.indice]!=null){
          Object.assign(book,result[this.indice]);
          this.libros.push(book);
          book=new Libro();
          this.indice++;
        }*/
        result.forEach((element:any)=>{
          Object.assign(book,element);
          this.libros.push(book);
          book= new Libro();
        });
        
        Object.assign(this.libro,this.libros[0]);
        
      },
      error=>{
        alert("A ocurrido un error"+error)
      }
    )
  }
  siguiente(){
    this.indice =this.indice +1;
    if(this.indice == this.libros.length){
      this.indice=0;
      Object.assign(this.libro,this.libros[this.indice]);
    }else{
      Object.assign(this.libro,this.libros[this.indice]);
       
    }
  }
  anterior(){
    this.indice =this.indice -1;
    if(this.indice < 0){
      this.indice=this.libros.length;
      Object.assign(this.libro,this.libros[this.indice]);
    }else{
      Object.assign(this.libro,this.libros[this.indice]);
    }
  }

}

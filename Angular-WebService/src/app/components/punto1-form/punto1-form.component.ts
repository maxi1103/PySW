import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/models/libro';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-punto1-form',
  templateUrl: './punto1-form.component.html',
  styleUrls: ['./punto1-form.component.css']
})
export class Punto1FormComponent implements OnInit {
  libro:Libro;
  stringimage!:string;
  constructor(private libroService:LibroService,private router:Router) { 
    this.libro=new Libro();
  }

  ngOnInit(): void {
  }

  altaLibro(){
   this.libroService.saveLibro(this.libro).subscribe(
      result=>{
        alert("Exito")
        console.log(result);
        this.router.navigate(['punto1']);
      },
      error=>{
        console.log(error);
      }
    )
    
  }
  onFileChanges(files:any){
    console.log("File has changed:", files);
    this.libro.imagen = files[0].base64;
  }
}

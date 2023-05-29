import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/interfaces/Fruta';



import { Ejercicio004Service } from 'src/app/services/ejercicio004.service';

@Component({
  selector: 'app-ejercicio004',
  templateUrl: './ejercicio004.component.html',
  styleUrls: ['./ejercicio004.component.css']
})
export class Ejercicio004Component implements OnInit{

  frutas!: Fruta[];
  fruta!: Fruta;

  constructor(private ejercicio004Service: Ejercicio004Service){
    this.fruta = {
      id:0,
      descripcion:"",
      precio:0
    }
  }

  ngOnInit(): void {
    this.recuperarFrutas();
  }

  recuperarFrutas(){
    this.ejercicio004Service.recuperarFrutas().subscribe(result => this.frutas = result);
  }

  eliminar(id: number){
    this.ejercicio004Service.eliminar(id).subscribe((datos:Fruta) => {
      if(datos){
        alert("Registro eliminado");
        this.recuperarFrutas();
      }
    })
  }

  seleccionar(f: Fruta){
    this.fruta.descripcion = f.descripcion;
    this.fruta.precio = f.precio;
    this.fruta.id = f.id;
  }

  insertar(){
    this.ejercicio004Service.insertar(this.fruta).subscribe((datos:any) => {
      if(datos){
        alert("Registro insertado");
        this.recuperarFrutas();
      }
    })
  }

  modificar(id: number){
    this.ejercicio004Service.modificar(id, this.fruta).subscribe((datos:Fruta) => {
      if(datos){
        alert("Registro modificado");
        this.recuperarFrutas();
      }
    })
    this.fruta.descripcion = "";
    this.fruta.precio = 0;
    this.fruta.id = 0;
  }
}

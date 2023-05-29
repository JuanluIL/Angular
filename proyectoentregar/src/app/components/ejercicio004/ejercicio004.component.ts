import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/interfaces/fruta';

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

  baja(F:Fruta){

  }

  seleccionar(f: Fruta){

  }
}

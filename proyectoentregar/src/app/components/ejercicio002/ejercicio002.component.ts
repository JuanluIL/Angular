import { Component, OnInit } from '@angular/core';
import { Ejercicio002Service } from 'src/app/services/ejercicio002.service';

@Component({
  selector: 'app-ejercicio002',
  templateUrl: './ejercicio002.component.html',
  styleUrls: ['./ejercicio002.component.css']
})
export class Ejercicio002Component implements OnInit{

  constructor(private ejercicio002Service: Ejercicio002Service){}

  ngOnInit(): void {
    this.mostrarTodos();
  }

  entradas: any;

  mostrarTodos(){
    this.ejercicio002Service.mostrarTodos().subscribe(result => this.entradas=result);
  }
}

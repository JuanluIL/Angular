import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ejercicio003Service } from 'src/app/services/ejercicio003.service';

@Component({
  selector: 'app-ejercicio003',
  templateUrl: './ejercicio003.component.html',
  styleUrls: ['./ejercicio003.component.css']
})
export class Ejercicio003Component implements OnInit{

  constructor(private ejercicio003Service: Ejercicio003Service, private router: Router){}

  ngOnInit(): void {
    this.mostrarTodos();
  }

  empleados: any;

  mostrarTodos(){
    this.ejercicio003Service.mostrarTodos().subscribe(result => this.empleados=result);
  }
  mostrarDetalle(id: number){
    this.router.navigate(['detalle', id]);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Ejercicio003Service } from 'src/app/services/ejercicio003.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit{

  constructor(private ejercicio003Service: Ejercicio003Service, private activatedRoute: ActivatedRoute){}

  detalle: any;
  nro! :number;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
    this.nro = parseInt(parametros.get("id")!);
    })
    this.recuperarUno(this.nro)
    }



  recuperarUno(id: number){
    return this.ejercicio003Service.recuperarUno(id).subscribe( result => this.detalle = result);
  }
}

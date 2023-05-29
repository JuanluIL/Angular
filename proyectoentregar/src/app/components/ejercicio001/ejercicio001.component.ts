import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio001',
  templateUrl: './ejercicio001.component.html',
  styleUrls: ['./ejercicio001.component.css']
})
export class Ejercicio001Component {

  user={
    ID:0 ,
    Nombre:"",
    Email:"",
    Edad:0,
    Idioma: ""
    }


  users = [{ID:1, Nombre:'José', Email:"pepe@hotmail.com", Edad:32, Idioma:"Frances"},
                {ID:2, Nombre:'María', Email:"maria@hotmail.com", Edad:23, Idioma:"Español"},
                {ID:3, Nombre:'Marta', Email:"marta@hotmail.com", Edad:45, Idioma:"Ingles"},
                {ID:4, Nombre:'Valeria', Email:"valeria@hotmail.com", Edad:19, Idioma:"Frances"},
                {ID:5, Nombre:'Manuel', Email:"manuel@hotmail.com", Edad:56, Idioma:"Español"},
  ];

  hayRegistros() {
    return this.users.length>0;
  }

  borrar(ID:number) {
    for(let x=0;x<this.users.length;x++)
    if (this.users[x].ID==ID)
    {
    this.users.splice(x,1);
    return;
    }
    }

  agregar() {
    if (this.user.ID==0) {
      alert('Debe ingresar un código de articulo distinto a cero');
      return;
    }
    for(let x=0;x<this.users.length;x++){
      if (this.users[x].ID==this.user.ID) {
        alert('ya existe un articulo con dicho codigo');
        return;
      }
    }

    this.users.push({
      ID:this.user.ID,
      Nombre:this.user.Nombre,
      Email:this.user.Email,
      Edad:this.user.Edad,
      Idioma:this.user.Idioma
    });

    this.user.ID=0;
    this.user.Nombre="";
    this.user.Email="";
    this.user.Edad=0;
    this.user.Idioma="";
  }

  seleccionar(user: { ID: number; Nombre: string; Email: string; Edad: number; Idioma: string }) {
    this.user.ID=user.ID;
    this.user.Nombre=user.Nombre;
    this.user.Email=user.Email;
    this.user.Edad=user.Edad;
    this.user.Idioma=user.Idioma;
    }

  modificar() {
    for(let x=0;x<this.users.length;x++)
      if (this.users[x].ID==this.user.ID) {
        this.users[x].ID=this.user.ID;
        this.users[x].Nombre=this.user.Nombre;
        this.users[x].Email=this.user.Email;
        this.users[x].Edad=this.user.Edad;
        this.users[x].Idioma=this.user.Idioma;
        return;
      }
      alert('No existe el código de articulo ingresado');
    }

}

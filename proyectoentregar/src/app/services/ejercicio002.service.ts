
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Ejercicio002Service {

  constructor(private http: HttpClient) { }
  url = 'https://jsonplaceholder.typicode.com/posts';

  mostrarTodos(){
    return this.http.get(this.url);
  }
}

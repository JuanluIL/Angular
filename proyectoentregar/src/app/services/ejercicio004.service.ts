import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fruta } from '../interfaces/Fruta';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class Ejercicio004Service {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/frutas';

  recuperarFrutas() : Observable<Fruta[]>{
    return this.http.get<Fruta[]>(`${this.url}?_sort=id&_order=asc`);
    //return this.http.get<Fruta[]>(this.url);
  }

  eliminar(id: number){
    return this.http.delete<Fruta>(`${this.url}/${id}`);
  }

  insertar(fruta: Fruta): Observable<Fruta>{
    return this.http.post<Fruta>(this.url, fruta);
  }

  modificar(id: number, fruta: Fruta){
    return this.http.put<Fruta>(`${this.url}/${id}`, fruta);
  }
}

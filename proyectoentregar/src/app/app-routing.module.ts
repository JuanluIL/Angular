import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Ejercicio001Component } from './components/ejercicio001/ejercicio001.component';
import { Ejercicio002Component } from './components/ejercicio002/ejercicio002.component';
import { Ejercicio003Component } from './components/ejercicio003/ejercicio003.component';
import { Ejercicio004Component } from './components/ejercicio004/ejercicio004.component';
import { DetalleComponent } from './components/detalle/detalle.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: "detalle/:id", component: DetalleComponent},
  { path: 'ejercicio001', component: Ejercicio001Component },
  { path: 'ejercicio002', component:  Ejercicio002Component},
  { path: 'ejercicio003', component: Ejercicio003Component },
  { path: 'ejercicio004', component: Ejercicio004Component },
  { path: '', redirectTo: "/home", pathMatch:"full" },
  { path: '**', redirectTo: "/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }

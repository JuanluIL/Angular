import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Ejercicio001Component } from './components/ejercicio001/ejercicio001.component';
import { Ejercicio002Component } from './components/ejercicio002/ejercicio002.component';
import { Ejercicio003Component } from './components/ejercicio003/ejercicio003.component';
import { Ejercicio004Component } from './components/ejercicio004/ejercicio004.component';
import { HeaderComponent } from './components/header/header.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Ejercicio001Component,
    Ejercicio002Component,
    Ejercicio003Component,
    Ejercicio004Component,
    HeaderComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

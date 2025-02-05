import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { AbilidadesComponent } from './abilidades/abilidades.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadPageComponent } from './load-page/load-page.component'; // Importa esto

@NgModule({
  declarations: [
    AppComponent,
    SobreMiComponent,
    AbilidadesComponent,
    ProyectosComponent,
    ContactoComponent,
    NavComponent,
    LoadPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule // Agrega esto
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
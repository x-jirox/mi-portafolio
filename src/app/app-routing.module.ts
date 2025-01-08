import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { AbilidadesComponent } from './abilidades/abilidades.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: '', redirectTo: '/about-me', pathMatch: 'full' },  // Redirige la ruta raíz
  { path: 'about-me', component: SobreMiComponent },        
  { path: 'education', component: EducacionComponent }, 
  { path: 'experience', component: ExperienciaComponent },        
  { path: 'skills', component: AbilidadesComponent },
  { path: 'projects', component: ProyectosComponent }, 
  { path: 'contact', component: ContactoComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

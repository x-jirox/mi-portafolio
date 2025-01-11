import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { AbilidadesComponent } from './abilidades/abilidades.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: '', redirectTo: '/about-me', pathMatch: 'full' },
  { path: 'about-me', component: SobreMiComponent, data: { animation: 'AboutMePage' } },
  { path: 'skills', component: AbilidadesComponent, data: { animation: 'SkillsPage' } },
  { path: 'projects', component: ProyectosComponent, data: { animation: 'ProjectsPage' } },
  { path: 'contact', component: ContactoComponent, data: { animation: 'ContactPage' } },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

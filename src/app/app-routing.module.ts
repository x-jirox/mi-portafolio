import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { AbilidadesComponent } from './abilidades/abilidades.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: '', redirectTo: '/about-me', pathMatch: 'full' },
  { path: 'about-me', component: SobreMiComponent, data: { animation: 'AboutMePage' } },
  { path: 'education', component: EducacionComponent, data: { animation: 'EducationPage' } },
  { path: 'experience', component: ExperienciaComponent, data: { animation: 'ExperiencePage' } },
  { path: 'skills', component: AbilidadesComponent, data: { animation: 'SkillsPage' } },
  { path: 'projects', component: ProyectosComponent, data: { animation: 'ProjectsPage' } },
  { path: 'contact', component: ContactoComponent, data: { animation: 'ContactPage' } },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

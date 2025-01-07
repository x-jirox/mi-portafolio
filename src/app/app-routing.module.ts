import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';

const routes: Routes = [

  { path: '', component: InicioComponent },  // Default route
  { path: 'about-me', component: SobreMiComponent },  // Default route
  { path: '', component: InicioComponent },  // Default route
  { path: '', component: InicioComponent },  // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

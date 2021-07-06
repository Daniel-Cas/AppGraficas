import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'grafica',
    loadChildren: () => import('./graficas/graficas.module').then( module => module.GraficasModule)
  },
  {
    path: '**',
    redirectTo: 'grafica'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

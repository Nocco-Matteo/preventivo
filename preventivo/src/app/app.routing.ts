import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'preventivo',
    loadChildren: () => import('./modules/preventivo/preventivo.module').then(m => m.PreventivoModule),
  },
  {
    path: 'servizi',
    loadChildren: () => import('./modules/servizi/servizi.module').then(m => m.ServiziModule),
  },
  {
    path: 'chiSiamo',
    loadChildren: () => import('./modules/servizi/servizi.module').then(m => m.ServiziModule),
  },
  {
    path: 'contatti',
    loadChildren: () => import('./modules/contatti/contatti.module').then(m => m.ContattiModule)
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ServiziComponent } from 'src/app/components/pages/servizi/servizi.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', component: ServiziComponent  }
];

@NgModule({
  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ServiziRoutingModule { }
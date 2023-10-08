import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreventivoComponent } from 'src/app/components/pages/preventivo/preventivo.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: PreventivoComponent  }
];

@NgModule({
  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PreventivoRoutingModule { }
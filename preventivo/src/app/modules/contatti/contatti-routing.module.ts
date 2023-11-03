import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContattiComponent } from "src/app/components/pages/contatti/contatti.component";
import { HomeComponent } from "src/app/components/pages/home/home.component";


const routes: Routes = [
    { path: '', pathMatch: 'full', component: ContattiComponent  }
  ];
  
  @NgModule({
    
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
  })
  export class ContattiRoutingModule { }
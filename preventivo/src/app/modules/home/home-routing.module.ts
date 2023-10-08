import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "src/app/components/pages/home/home.component";


const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent  }
  ];
  
  @NgModule({
    
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
  })
  export class HomeRoutingModule { }
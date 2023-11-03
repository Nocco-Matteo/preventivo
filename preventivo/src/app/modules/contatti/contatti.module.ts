import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContattiComponent } from 'src/app/components/pages/contatti/contatti.component';
import { SharedModule } from '../shared.module';
import { ContattiRoutingModule } from './contatti-routing.module';



@NgModule({
  declarations: [
    ContattiComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContattiRoutingModule
  ]
})
export class ContattiModule { }

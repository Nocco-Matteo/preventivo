import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { PreventivoRoutingModule } from './preventivo-routing.module';
import { PreventivoComponent } from 'src/app/components/pages/preventivo/preventivo.component';



@NgModule({
  declarations: [PreventivoComponent],
  imports: [
    CommonModule,
    SharedModule,
    PreventivoRoutingModule
  ]
})
export class PreventivoModule { }

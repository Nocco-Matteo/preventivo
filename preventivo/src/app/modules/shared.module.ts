import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from '../components/shared/box/box.component';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';



@NgModule({
  declarations: [
    BoxComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatRadioModule
  ],
  exports: [BoxComponent]
})
export class SharedModule { }

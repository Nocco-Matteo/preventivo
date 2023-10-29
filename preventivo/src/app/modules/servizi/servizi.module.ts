import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiziComponent } from 'src/app/components/pages/servizi/servizi.component';
import { SharedModule } from '../shared.module';
import { ServiziRoutingModule } from './servizi-routing.module';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { PuzzleComponent } from 'src/app/components/pages/servizi/puzzle/puzzle.component';

@NgModule({
  declarations: [ServiziComponent, PuzzleComponent],
  imports: [
    CommonModule,
    SharedModule,
    ServiziRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule
  ]
})
export class ServiziModule { }

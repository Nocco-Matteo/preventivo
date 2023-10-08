import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Domanda } from 'src/app/models/preventivo.model';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent {

  @Input() 
  sezionePreventivo?: Domanda;
  @Output() 
  answerSelected = new EventEmitter<string>();
  
  selectedAnswer?: string;

  selelzionaRisposta(answer: string) {
    this.selectedAnswer = answer;
  }

  sceltaConfermata() {
    this.answerSelected.emit(this.selectedAnswer);
    this.selectedAnswer = undefined;
  }
}

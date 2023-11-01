import { Component, HostListener } from '@angular/core';
import { LAST_BUTTON_APPEAR, PUZZLE_ANIMATION } from 'src/app/animations/animations';

@Component({
  selector: 'app-servizi',
  templateUrl: './servizi.component.html',
  styleUrls: ['./servizi.component.scss'],
  animations : [LAST_BUTTON_APPEAR]
})
export class ServiziComponent {

  showLastButton: Boolean = false;
  constructor(){
  }

}

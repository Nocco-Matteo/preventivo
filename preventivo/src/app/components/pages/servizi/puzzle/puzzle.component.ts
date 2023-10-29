import { Component, HostListener, Input, OnInit } from '@angular/core';
import { PUZZLE_ANIMATION } from 'src/app/animations/animations';
import { StatiPuzzle } from 'src/app/configs/servizi.config';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.scss'],
  animations: [PUZZLE_ANIMATION]
})
export class PuzzleComponent implements OnInit {

  pezzo1state: StatiPuzzle = StatiPuzzle.startPosition;
  pezzo2state: StatiPuzzle = StatiPuzzle.startPosition;
  pezzo3state: StatiPuzzle = StatiPuzzle.startPosition;
  pezzo4state: StatiPuzzle = StatiPuzzle.startPosition;
  containerState?: StatiPuzzle;

  scrollBarPosition: number = 0;
  viewHeight: number = window.innerHeight;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event?: Event) {
    console.log("pos: ", this.scrollBarPosition);

    if (this.scrollBarPosition < window.document.documentElement.scrollTop) {
      //scroll verso il basso
      this.scrollBarPosition = window.document.documentElement.scrollTop;

      // if (this.scrollBarPosition < this.viewHeight) {
      //   this.pezzo1state = StatiPuzzle.right
      //   this.pezzo2state = StatiPuzzle.left
      // }
      if (this.scrollBarPosition > 0 && this.scrollBarPosition < this.viewHeight) {
        this.pezzo3state = StatiPuzzle.downLeft
      }
      else if (this.scrollBarPosition > (this.viewHeight * 1.5) && this.scrollBarPosition < (this.viewHeight * 2.5)) {
        if (this.pezzo3state !== StatiPuzzle.downLeft) {
          this.pezzo3state = StatiPuzzle.downLeft
        }
        this.pezzo4state = StatiPuzzle.downRight
      }
      else if (this.scrollBarPosition > (this.viewHeight * 2.5)) {
        console.log("ultimo blocco");
      }
    } else {
      //scroll verso l'alto
      this.scrollBarPosition = window.document.documentElement.scrollTop;

    //   if (this.scrollBarPosition === 0) {

    //   }
    //   if (this.scrollBarPosition < this.viewHeight) {
    //     this.pezzo3state = StatiPuzzle.disappear
    //   }
    //   else if (this.scrollBarPosition < (this.viewHeight * 2)) {
    //     this.pezzo4state = StatiPuzzle.disappear
    //   }
    }
  }
  constructor() { }

  ngOnInit(): void {
    this.init()
  }

  startPuzzleAnimattions(): void {
    this.pezzo1state = StatiPuzzle.right
    this.pezzo2state = StatiPuzzle.left
  }

  private init(): void {

    this.startPuzzleAnimattions()
  }
}

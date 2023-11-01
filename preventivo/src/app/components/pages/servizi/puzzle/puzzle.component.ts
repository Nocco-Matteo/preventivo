import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
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

  scrollBarPosition: number = 0;
  viewHeight: number = window.innerHeight;

  @Output() showLastButton: EventEmitter<boolean> = new EventEmitter<boolean>();
  @HostBinding('style.position') position = 'fixed';
  @HostBinding('style.top') top = '0px';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event?: Event) {
    console.log("pos: ", this.scrollBarPosition);
    let stopPoint = this.viewHeight * 2; 

    if (window.scrollY >= stopPoint) {
      this.position = 'absolute';
      this.top = stopPoint + 'px';
    } else {
      this.position = 'fixed';
      this.top = '0px';
    }
    //scroll verso il basso
    if (this.scrollBarPosition < window.document.documentElement.scrollTop) {
      this.scrollBarPosition = window.document.documentElement.scrollTop;

      // if (this.scrollBarPosition < this.viewHeight) {
      //   this.pezzo1state = StatiPuzzle.right
      //   this.pezzo2state = StatiPuzzle.left
      // }
      if (this.scrollBarPosition > (this.viewHeight * 0.5) && this.scrollBarPosition < this.viewHeight) {
        this.pezzo3state = StatiPuzzle.downLeft
      }
      else if (this.scrollBarPosition > (this.viewHeight * 1.5) && this.scrollBarPosition < (this.viewHeight * 2.5)) {
        if (this.pezzo3state !== StatiPuzzle.downLeft) {
          this.pezzo3state = StatiPuzzle.downLeft
          setTimeout(() => {
            this.pezzo4state = StatiPuzzle.downRight
          }, 150);
        }
        else {

          this.pezzo4state = StatiPuzzle.downRight
        }
      }
      // else if (this.scrollBarPosition > (this.viewHeight * 2.5)) {
      //   this.pezzo1state = StatiPuzzle.final1
      //   this.pezzo2state = StatiPuzzle.final2
      //   this.pezzo3state = StatiPuzzle.final3
      //   this.pezzo4state = StatiPuzzle.final4

      //   setTimeout(() => {
      //     this.showLastButton.emit(true)
      //   }, 800);
      // }
    }
    //scroll verso l'alto
    else {
      this.scrollBarPosition = window.document.documentElement.scrollTop;

      if (this.scrollBarPosition < (this.viewHeight * 0.75)) {
        this.pezzo3state = StatiPuzzle.disappear
      }
      else if (this.scrollBarPosition > (this.viewHeight * 0.75) && this.scrollBarPosition < (this.viewHeight * 1.75)) {
        this.pezzo4state = StatiPuzzle.disappear
      }
      // else if (this.scrollBarPosition > (this.viewHeight * 1.75) && this.scrollBarPosition < (this.viewHeight * 2.75)) {
      //   setTimeout(() => {
      //     this.pezzo4state = StatiPuzzle.downRightFast
      //   }, 50);
      //   setTimeout(() => {
      //     this.pezzo3state = StatiPuzzle.downLeftFast
      //   }, 100);
      //   setTimeout(() => {
      //     this.pezzo2state = StatiPuzzle.leftFast
      //   }, 150);
      //   setTimeout(() => {
      //     this.pezzo1state = StatiPuzzle.rightFast
      //   }, 200);
      // }
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
    console.log("altezza schermo: ", this.viewHeight);

    this.startPuzzleAnimattions()
  }
}

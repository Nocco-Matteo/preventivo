import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { take, takeWhile } from 'rxjs';
import { Domanda, Risposta } from 'src/app/models/preventivo.model';
import { ADD_RISPOSTA, LOAD_DOMANDE } from 'src/app/store/actions/preventivo.actions';
import { selectDomande, selectRisposte } from 'src/app/store/selectors/preventivo.selectors';
import { AppState } from 'src/app/store/state';

@Component({
  selector: 'app-preventivo',
  templateUrl: './preventivo.component.html',
  styleUrls: ['./preventivo.component.scss']
})
export class PreventivoComponent implements OnInit, OnDestroy {
  private unsubscribe: boolean = true;

  currentIndex: number = 0;
  currentDomanda?: Domanda;
  domande?: Domanda[];

  constructor(private readonly store: Store<AppState>) { }

  ngOnDestroy(): void {
    this.unsubscribe = false;
  }

  ngOnInit(): void {
    this.init()
  }

  gestisciRisposta(answer: string): void {
    const risposta = {
      id: this.currentIndex,
      risposta: answer
    }
    this.store.dispatch(ADD_RISPOSTA({ risposta: risposta }));

    this.currentIndex++
    this.currentDomanda = this.domande![this.currentIndex]
  }

  private init(): void {
    this.store.dispatch(LOAD_DOMANDE());

    this.store.select(selectDomande)
      .pipe(takeWhile(() => this.unsubscribe))
      .subscribe((domande: Domanda[]) => {
        if (domande) {
          this.domande = domande;
          this.currentDomanda = domande[0]
        }
      })
  }
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as preventivoActions from '../actions/preventivo.actions';
import { of } from 'rxjs';
import { Domanda } from 'src/app/models/preventivo.model';
import { PreventivoService } from 'src/app/services/preventivo.service';

@Injectable()
export class PreventivoEffects {
    //get Domande
    loadDomande$ = createEffect(() =>
        this.actions$
            .pipe(
                ofType(preventivoActions.LOAD_DOMANDE),
                mergeMap(() =>
                    this.preventivoService.getDomande()
                        .pipe(
                            map((domande: Domanda[]) => {
                                console.log(domande);                                
                                return preventivoActions.LOAD_DOMANDE_SUCCESS({ domande })}),
                            catchError(error => of(preventivoActions.LOAD_DOMANDE_FAILURE({ error })))
                        ))
            )
    );

    constructor(
        private readonly actions$: Actions,
        private readonly preventivoService: PreventivoService
    ) { }
}
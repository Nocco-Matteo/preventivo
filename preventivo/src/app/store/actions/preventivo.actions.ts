import { createAction, props } from '@ngrx/store';
import { Domanda, Risposta } from 'src/app/models/preventivo.model';

export const LOAD_DOMANDE = createAction(
  '[Domanda Page] Load Domande'
);

export const LOAD_DOMANDE_SUCCESS = createAction(
  '[Domanda API] Domande Loaded Success',
  props<{ domande: Domanda[] }>()
);

export const LOAD_DOMANDE_FAILURE = createAction(
  '[Domanda API] Domande Loaded Failure',
  props<{ error: any }>()
);

export const ADD_RISPOSTA = createAction(
  '[Risposta Page] Aggiungi Risposta',
  props<{ risposta: Risposta }>()
);

import { createReducer, on } from "@ngrx/store";
import { Domanda, Risposta, Utente } from "../../models/preventivo.model";
import * as preventivoActions from "../actions/preventivo.actions"
import { initialState } from "../state";


export const preventivoReducer = createReducer(
    initialState,
    on(preventivoActions.LOAD_DOMANDE_SUCCESS, (state, { domande }) => ({ ...state, domande })),
    on(preventivoActions.LOAD_DOMANDE_FAILURE, (state, { error }) => ({ ...state, error })),
    on(preventivoActions.ADD_RISPOSTA, (state, { risposta }) => ({
        ...state,
        risposte: [...state.risposte, risposta] 
      }))
);
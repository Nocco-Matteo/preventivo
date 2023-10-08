import { Domanda, Risposta, Utente } from "../models/preventivo.model";

export interface AppState {
    domande: Domanda[];
    risposte: Risposta[];
    utente: Utente;
    error: any;
}

export const initialState: AppState = {
    domande: [],
    risposte: [],
    utente: new Utente(),
    error: undefined,
}
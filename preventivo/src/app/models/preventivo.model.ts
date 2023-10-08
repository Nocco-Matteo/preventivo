export interface Domanda {
    id: number,
    voce: string,
    risposte: string[]
}

export interface Risposta {
    id: number,
    risposta: string
}

export class Utente {
    nome: string;
    cognome: string;
    email: string;

    constructor() {
        this.nome = "";
        this.cognome = "";
        this.email = "";
    }
}
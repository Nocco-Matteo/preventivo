import { Language, Voce } from "../models/navbar.model";

export const vociMenu: Voce[] = [
    {
        voce: "NAVBAR.HOME",
        url: "/home"
    },
    {
        voce: "NAVBAR.SERVIZI",
        url: "/servizi"
    },
    {
        voce: "NAVBAR.CONTATTI",
        url: "/contatti"
    },
]

export const languages : Language[] =[
    {
        language : "it",
        label : "LANGUAGES.ITALIANO",
        css : "flag-icon-it"
    },
    {
        language : "en",
        label : "LANGUAGES.INGLESE",
        css : "flag-icon-gb"
    }
]
import { animate, state, style, transition, trigger } from "@angular/animations";

//puzzle animation
export const PUZZLE_ANIMATION = [
    trigger('movePiece', [
        state('left', style({
            transform: 'translateX(-23%) rotate(-90deg)',
            opacity: "1"
        })),
        state('right', style({
            transform: 'translateX(23%)',
            opacity: "1"
        })),
        state('downLeft', style({
            transform: 'translateX(23%) translateY(21%)  rotate(90deg)',
            opacity: "1"
        })),
        state('downRight', style({
            transform: 'rotate(180deg) translateY(-21%) translateX(23%)',
            opacity: "1"
        })),
        state('disappear', style({
            opacity: "0"
        })),
        state('final1', style({
            transform: 'translateX(-103%) translateY(0)',
            opacity: "1"
        })),
        state('final2', style({
            transform: 'translateX(-149%) translateY(0) rotate(-90deg)',
            opacity: "1"
        })),
        state('final3', style({
            transform: 'translateX(-103%) translateY(21%) rotate(90deg)',
            opacity: "1"
        })),
        state('final4', style({
            transform: 'translateX(-149%) translateY(21%) rotate(180deg)',
            opacity: "1"
        })),
        state('leftFast', style({
            transform: 'translateX(-23%) rotate(-90deg)',
            opacity: "1"
        })),
        state('rightFast', style({
            transform: 'translateX(23%)',
            opacity: "1"
        })),
        state('downLeftFast', style({
            transform: 'translateX(23%) translateY(21%)  rotate(90deg)',
            opacity: "1"
        })),
        state('downRightFast', style({
            transform: 'rotate(180deg) translateY(-21%) translateX(23%)',
            opacity: "1"
        })),
        transition('* => leftFast', animate('0.5s ease-in-out')),
        transition('* => rightFast', animate('0.5s ease-in-out')),
        transition('* => downLeftFast', animate('0.5s ease-in-out')),
        transition('* => downRightFast', animate('0.5s ease-in-out')),
        transition('* => *', animate('1s ease-in-out')),
    ])
]

export const LAST_BUTTON_APPEAR = trigger('buttonAppear', [
    transition(':enter', [
        style({ opacity: '0', transform: 'translateY(-100%)' }), 
        animate('1s ease-in-out', style({ opacity: '1', transform: 'translateY(0)' }))
    ])
]);

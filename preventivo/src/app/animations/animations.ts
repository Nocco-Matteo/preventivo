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
        
        transition('* => *', animate('1s ease-in-out'))
    ]),
    trigger('finalMove', [
        state('final', style({
            transform: "translateX(-25%)"
        })
        ),
        transition('* => *', animate('1s ease-in-out'))
    ])
]

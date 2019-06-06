export const log = message => console.log(message);

class elemento {
    constructor () {
        this.input1 = null;
        this.input2 = null;
        this.output = null;
    }

    collega (top1, top2) {
        this.top1 = top1;
        this.top2 = top2;
    }
}

export class pulsante extends elemento {
    constructor () {
        super();
    }
}

export class devAnd extends elemento {
    constructor () {
        super();
    }
}

export class devOr extends elemento {
    constructor () {
        super();
    }
}

export class devNot extends elemento {
    constructor () {
        super();
    }
}

export class filo extends elemento {
    constructor () {
        super();
    }
}

export class risultato extends elemento {
    constructor (atteso) {
        super();
        this.atteso = atteso;
    }
}

export class simulatore {
    constructor() {
        this.elementi = [];
        this.verifica = null;
        this.risultato = null;
    }

    simula() {
        this.elementi.forEach(sez => {
            sez.forEach(el => {
                
                // SE FILO
                if(el instanceof filo) {
                    let top1 = el.top1;

                    el.input1 = top1.output;
                    el.output = top1.output;
                }

                // SE DEVNOT
                if(el instanceof devNot) {
                    let top1 = el.top1;
                    
                    el.input1 = top1.output;
                    el.output = !el.input1;
                }

                // SE DEVAND
                if(el instanceof devAnd) {
                    let top1 = el.top1;
                    let top2 = el.top2;

                    el.input1 = top1.output;
                    el.input2 = top2.output;
                    el.output = el.input1 && el.input2;
                }

                // SE DEVOR
                if(el instanceof devOr) {
                    let top1 = el.top1;
                    let top2 = el.top2;

                    el.input1 = top1.output;
                    el.input2 = top2.output;
                    el.output = el.input1 || el.input2;
                }

                // SE RISULTATO
                if(el instanceof risultato) {
                    let top1 = el.top1;
                    
                    el.input1 = top1.output;
                    this.risultato = el.input1;
                    this.verifica = el.atteso === el.input1 ? true : false ;
                }
            });
        });
    }
}

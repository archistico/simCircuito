import { log, pulsante, devAnd, devNot, devOr, filo, risultato, simulatore } from "./external.js";

// Creazione elementi
let f1 = new filo();
let f2 = new filo();
let f3 = new filo();
let f4 = new filo();
let f5 = new filo();
let f6 = new filo();
let f7 = new filo();

let p1 = new pulsante();
let p2 = new pulsante();
let p3 = new pulsante();
p1.output = true;
p2.output = true;
p3.output = false;

let d1 = new devAnd();
let d2 = new devOr();
let r1 = new risultato(true);

// Collegamenti
p1.collega(null);
p2.collega(null);
p3.collega(null);

f1.collega(p1);
f2.collega(p2);
f3.collega(p3);
f4.collega(f3);
f5.collega(f4);
f6.collega(d1);
f7.collega(d2);

d1.collega(f1, f2);
d2.collega(f5, f6);

r1.collega(f7);

let sim = new simulatore();

sim.elementi.push([p1, p2, p3]);
sim.elementi.push([f1, f2, f3]);
sim.elementi.push([d1, f4]);
sim.elementi.push([f5, f6]);
sim.elementi.push([d2]);
sim.elementi.push([f7]);
sim.elementi.push([r1]);

log("---START---");
sim.simula();
log(sim);
log("---STOP----");
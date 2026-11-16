// Exercise 056: Boss Trap Activation Check
// Objective: Trigger trap when plate is stepped on and cooldown is ready using '&&'

let isPlateStepped = true;
let cooldownReady = true;

let isBossTrapActivated = (isPlateStepped === true) && (cooldownReady === true);

console.log("Is the boss trap activated? " + isBossTrapActivated); // true
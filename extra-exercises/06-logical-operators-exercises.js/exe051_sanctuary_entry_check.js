// Exercise 051: Sactuary Entry Requirements
// Objective: Check if a character meets level and pass prerequisites using '&&'

let playerLevel = 20;
let hasPass = true;

// Both conitions must be true to enter the sanctuary
let canEnterSanctuary = (playerLevel >= 20) && (hasPass === true);

console.log("Can the character enter the sanctuary? " + canEnterSanctuary); // true
// Exercise 050: Loose vs Strict Equality Comparison
// Objective: Compare a string age with a number using '==' and '==='

let ageString = "18";
let ageNumber = 18;

// Loose equality (==) allows type coercion (compares values only)
let looseCheck = (ageString == ageNumber);

// Strict equality (===) checks both value and data type format
let strictCheck = (ageString === ageNumber);

console.log("Loose equality check (==): " + looseCheck); // true

console.log("Strict equality check (===): " + strictCheck); // false
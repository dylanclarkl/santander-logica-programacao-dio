// Exercise 057: Account Trade Restriction Check
// Objective: Check trade restrictions using the logical NOT operator '!'

let isEmailVerified = false;

// Player is restricted if their email is NOT verified
let isTradeRestricted = !isEmailVerified;

console.log("Is the player restricted from trading? " + isTradeRestricted); // true
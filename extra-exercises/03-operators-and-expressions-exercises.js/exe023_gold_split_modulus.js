// Exercise 023: Gold Split Remainder (Modulus)
// Objective: Find the remainder of dividing 25 gold coins among 4 players

// Declaring loot and party size
let totalGold = 25;
let totalPlayers = 4;

// Calculating remaining gold using modulus operator
let remainingGold = totalGold % totalPlayers;

// Outputting leftover gold
console.log("Remaining Gold: " + remainingGold);
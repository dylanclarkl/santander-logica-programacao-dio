// Exercise 02: In-game Currency System
// Objective: Use const for fixed currency types and let for the collected gold amount

// Declaring const to define the game's currency name
const currencyName = "Gold Coins";

// Declaring let for the player's gold, which changes as they earn more coins
let playerGold = 150;

// Displays the player's initial coins in the console
console.log("Initial " + currencyName + ": " + playerGold);

// Player earned more gold
playerGold = playerGold + 50;
console.log("Updated " + currencyName + ": " + playerGold);
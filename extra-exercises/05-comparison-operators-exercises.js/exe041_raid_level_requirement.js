// Exercise 041: Raid Level Requirement Check
// Objective: Check if playerLevel meets minLevel using '>='

let playerLevel = 45;
let minLevel = 50;

// Checking if the player meets or exceeds the required raid level
let canEnterRaid = playerLevel >= minLevel;

console.log("Can enter raid? " + canEnterRaid); // false
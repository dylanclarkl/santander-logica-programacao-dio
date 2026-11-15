// Exercise 06: Server Info Concatenation
// Objective: Concatenate static strings and variables to build a server status message.

// Declaring a constant for the fixed server region name
const serverRegion = "South America (BR-01)";

// Declaring a variable for the current number of active players
let activePlayersCount = 12450;

// Concatenating strings and variables to display the full status message in the console
console.log("Connected to server: " + serverRegion + " | Active Players: " + activePlayersCount);
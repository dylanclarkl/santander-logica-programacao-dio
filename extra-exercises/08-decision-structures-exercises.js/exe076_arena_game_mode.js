// Exercise 076: Pvp Arena Game Mode Configuration
// Objective: Set player count per team based on selected arena mode

let selectedArena = "CaptureTheFlag";
let teamPlayerCount;

switch (selectedArena) {
    case "Deathmatch":
        teamPlayerCount = 1;
        break;
    case "CaptureTheFlag":
        teamPlayerCount = 3;
        break;
    case "TeamBattle":
        teamPlayerCount = 5;
        break;
    default:
        teamPlayerCount = 1;
        break;
}

console.log("Arena Mode: " + selectedArena + " | Players per Team: " + teamPlayerCount);
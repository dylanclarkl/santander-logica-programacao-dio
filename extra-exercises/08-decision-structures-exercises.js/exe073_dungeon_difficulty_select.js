// Exercise 073: Dungeon Difficulty Selector
// Objective: Configure drop rate and monster level based on selected difficulty

let difficulty = "3";
let dropRateMultiplier;
let monsterLevel;

switch (difficulty) {
    case "1":
        dropRateMultiplier = 1;
        monsterLevel = 1;
        break;
    case "2":
        dropRateMultiplier = 2;
        monsterLevel = 3;
        break;
    case "3":
        dropRateMultiplier = 3;
        monsterLevel = 5;
        break;
    default:
        dropRateMultiplier = 1;
        monsterLevel = 1;
        break;
}

console.log("Selected Difficulty: " + difficulty + " | Drop Rate: " + dropRateMultiplier + "x | Monster Level: " + monsterLevel);

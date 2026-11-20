// Exercise 062: Quest Reward Tier
// Objective: Apply gold multipliers based on quest difficulty

let baseGoldReward = 10;
let questDifficulty = "Easy";
let totalGold;

if (questDifficulty === "Easy") {
    totalGold = baseGoldReward * 1;
} else if (questDifficulty === "Medium") {
    totalGold = baseGoldReward * 1.5;
} else {
    totalGold = baseGoldReward * 2;
}

console.log("Quest completed (" + questDifficulty + ")! Total Gold earned: " + totalGold);
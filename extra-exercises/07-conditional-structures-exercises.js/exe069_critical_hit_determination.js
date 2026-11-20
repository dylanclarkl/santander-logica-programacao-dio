// Exercise 069: Critical Hit Roll Evaluation
// Objective: Determine if an attack roll lands a critical strike

let baseAttackDamage = 40;
let criticalRate = 25; // 25% chance
let attackRoll = 18; // Roll between 1 and 100

if (attackRoll <= criticalRate) {
    let critDamage = baseAttackDamage * 2;
    console.log("CRITICAL HIT! Dealt " + critDamage + " damage.");
} else {
    console.log("Normal Hit. Dealt " + baseAttackDamage + " damage.");
}
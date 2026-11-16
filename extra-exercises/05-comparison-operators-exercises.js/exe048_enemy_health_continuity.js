// Exercise 048: Enemy Health Continuity Check
// Objective: Verify if enemyHealth is greater than zero using '>'

let enemyHealth = 0;

// Checking if the enemy is still alive and combat should continue
let isCombatActive = (enemyHealth > 0);

console.log("Is combat loop still active? " + isCombatActive); // false
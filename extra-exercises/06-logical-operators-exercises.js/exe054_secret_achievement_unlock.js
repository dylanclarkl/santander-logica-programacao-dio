// Exercise 054: Secret Achievement Unlock
// Objective: Check multiple criteria using multiple '&&' operators

let score = 1000;
let hasKey = true;
let tutorialCompleted = true;

// All three conditions must be met simultaneously
let isSecretAchievementUnlocked = (score >= 1000) && (hasKey === true) && (tutorialCompleted === true);

console.log("Is the secret achievement unlocked? " + isSecretAchievementUnlocked); // true
// Exercise 064: Chest Lockpicking Attempt
// Objective: Evaluate lockpicking success based on agility and lock tier

let playerAgility = 50;
let lockDifficulty = "Easy";

if (playerAgility >= 50 && lockDifficulty === "Easy") {
    console.log("Success! The Easy chest lock opened.")
} else if (playerAgility >= 100 && lockDifficulty === "Medium") {
    console.log("Success! The Medium chest lock opened.");
} else if (playerAgility >= 200 && lockDifficulty === "Hard") {
    console.log("Success! The Hard chest lock opened.")
} else {
    console.log("Failed! Your lockpick broke.")
}
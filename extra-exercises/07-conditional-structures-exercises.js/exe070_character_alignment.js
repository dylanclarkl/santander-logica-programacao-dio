// Exercise 070: Moral Alignment Classification
// Objective: Classify character alignment based on karma points

let karmaPoints = -45;
let alignment;

if (karmaPoints >= 50) {
    alignment = "Hero";
} else if (karmaPoints > -50) {
    alignment = "Neutral";
} else {
    alignment = "Villain";
}

console.log("Karma Points: " + karmaPoints + " | Character Alignment: " + alignment);
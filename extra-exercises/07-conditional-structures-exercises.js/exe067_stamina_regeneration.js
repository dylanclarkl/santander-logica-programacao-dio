// Exercise 067: Resting Stamina Recovery
// Objective: Restore stamina based on character resting posture

let heroStamina = 0;
let heroPosture = "standing";

if (heroPosture === "sitting at campfire") {
    heroStamina += 50;
} else {
    heroStamina +=2;
}

console.log("Current Hero Stamina: " + heroStamina);
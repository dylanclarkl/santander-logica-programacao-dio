// Exercise 074: Mount Speed tier Switch
// Objective: Calculate movement speed using base speed plus mount bonus

let baseSpeed = 5;
let speedBonus;
let mount = "Dragon";

switch (mount) {
    case "Horse":
        speedBonus = 10;
        break;
    case "Wolf":
        speedBonus = 20;
        break;
    case "Dragon":
        speedBonus = 30;
        break;
    default:
        speedBonus = 0;
        break;
}

let currentSpeed = baseSpeed + speedBonus;

console.log("Summoned Mount: " + mount + " | Speed Bonus: +" + speedBonus + " | Current Speed: " + currentSpeed);
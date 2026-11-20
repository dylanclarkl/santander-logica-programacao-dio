// Exercise 063: Inventory Encumbrance Warning
// Objective: Verify if inventory weight exceeds maxium capacity

let currentWeight = 120;
let maxCapacity = 100;

if (currentWeight > maxCapacity) {
    console.log("Status: Over-encumbered! Movement speed penalty applied.");
} else {
    console.log("Status: Normal carrying weight.");
}
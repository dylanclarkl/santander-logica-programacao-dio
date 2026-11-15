// Exercise 035: Inventory Slot Remainder (Modulus)
// Objective: Calculate unassigned slots using the modulus operator ('%')

let inventorySlots = 45;
let itemsPerRow = 8;

let remainingSlots = inventorySlots % itemsPerRow;

console.log("Unassigned Inventory Slots: " + remainingSlots);
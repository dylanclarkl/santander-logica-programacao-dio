// Exercise 045: Inventory Weight Limit Check
// Objective: Check if current inventory weight is within safe capacity using '<='

let currentInventoryWeight = 85;
let maxCarryingCapacity = 85;

// Verifying if weight does not exceed the maximum limit
let isWeightSafe = (currentInventoryWeight <= maxCarryingCapacity);

console.log("Is inventory weight within safe limits? " + isWeightSafe); // true
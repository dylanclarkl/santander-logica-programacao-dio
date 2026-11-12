// Exercise 08: Combat Log History (Array)
// Objective: Record the latest actions in the combat log.

// Declaring an array containing recent combat action messages
let combatlog = [
    "Hero attacks Goblin for 25 damage.",
    "Goblin missed its attack.",
    "Hero used Health Potion (+50 HP)."
];

// Accessing and displaying the last entry in the array dynamically using .length - 1
console.log("Latest log entry: " + combatlog[combatlog.length - 1]); // Accessing the last log entry
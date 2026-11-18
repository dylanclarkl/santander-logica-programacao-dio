// ===================================================
// LESSON: Loop Structures (for, while, do-while)
// ===================================================

// 1. FOR Loop - Iterating through an array of inventory items
const inventoryItems = ["Health Potion", "Mana Potion", "Iron Sword", "Magic Shield", "Gold Coin"];

console.log("=== 1. FOR Loop: Inventory Inspection ===");

for (let i = 0; i < inventoryItems; i++) {
    console.log("Item " + (i + 1) + ": " + inventoryItems[i]);
}

// 2. WHILE Loop - Rolling a die until a target number (> 4) is achieved
console.log("\n === 2. WHILE loop: Dice Roll Challenge ===");
let diceRoll = 0;
let attempts = 0;

while (diceRoll <= 4) {
    attempts++;
    diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log("Attempt " + attempts + ": Rolled a " + diceRoll);
}

console.log("Success! Rolled a number greater tha 4 after " + attempts + " attempts");

// 3. DO-WHILE Loop - Consuming health potion (guaranteed at least one execution)
console.log("\n === 3. DO-WHILE Loop: Health Potion Consumption ===");
let potionsConsumed = 0;
let targetPotions = 3;

do {
    potionsConsumed++;
    console.log("Consumed potion number " + potionsConsumed + ". Restoring HP!");
} while (potionsConsumed < targetPotions);

console.log("All required health potions consumed.");
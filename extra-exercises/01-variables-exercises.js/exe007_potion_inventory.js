// Exercise 07: Potion Inventory
// Objective: Manage a warrior's healing potion inventory.

// Declaring a variable for the current number of health potions
let healthPotions = 5; 

// Declaring a constant for the fixed healing power of each potion
const potionHealPower = 50;

// Displaying the initial potion count and healing power in the console
console.log("You have " + healthPotions + " health potions. Each heals " + potionHealPower + " HP.");

// Player uses one potion (decreasing the stock by 1)
healthPotions = healthPotions - 1;

// Displaying the updated potion count in the console
console.log("Potions remaining after use: " + healthPotions);
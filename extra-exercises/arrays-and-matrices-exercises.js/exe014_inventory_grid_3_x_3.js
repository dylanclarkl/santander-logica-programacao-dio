// Exercise 04: Inventory Grid 3x3 (Matrix)
// Objective: Simulate a two-dimensional inventory grid (backpack).

// Declaring a 2D array (matrix) representing a 3x3 inventory grid with various items
let inventoryGrid = [
    ["Health Potion", "Mana Potion", "Antidote"],
    ["Iron Ore", "Wood Log", "Leather Scrap"],
    ["Gold Ring", "Magic Scroll", "Empty Slot"]
];

// Accessing item at row 1, column 1 (middle of the bag)
console.log("Item in slot [1][1]: " + inventoryGrid[1][1]); // Wood Log
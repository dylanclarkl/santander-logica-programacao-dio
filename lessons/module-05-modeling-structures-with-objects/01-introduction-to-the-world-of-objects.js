// ==========================================
// LESSON 01: Introduction to the World of Objects
// ==========================================

// 1. Creating an Object Literal with key-value properties
let guildGuest = {
    name: "Steelheart",
    level: 28,
    giftItem: "Enchanted Whetstone"
};

// 2. Accessing object properties using dot notation
console.log(
    guildGuest.name + " is level " + guildGuest.level +
    " and brought an " + guildGuest.giftItem + " to the guild hall!"
);

// 3. Dynamically adding a new property to an existing object
guildGuest.currentLocation = "Tavern Main Hall";
console.log(guildGuest.name + " is currently at the " + guildGuest.currentLocation + ".");

// 4. Updating an existing property value
guildGuest.level = 29;
console.log(guildGuest.name + " leveled up to level " + guildGuest.level + "!");
// ================================================
// LESSON: Arithmetic, Assignment, Increment, and Decrement Operators
// ================================================

// 1. Basic Arithmetic Operators (+, -, *, /, %)
let baseAttack = 50;
let bonusDamage = 15;
let totalDamage = baseAttack + bonusDamage; // Addition
console.log("Total Attack Power: " + totalDamage);

let totalHp = 100;
let damageTaken = 35;
let remainingHp = totalHp - damageTaken; // Subtraction
console.log("Remaining HP: " + remainingHp);

let totalLootGold = 50;
let partyMembers = 2;
let goldPerPlayer = totalLootGold / partyMembers; // Division
console.log("Gold split per player: " + goldPerPlayer);

let itemInventorySlots = 10;
let remainderSlots = itemInventorySlots % 3; // Modulus
console.log("Remaining unassigned backpack slots: " + remainderSlots);

// 2. String Concatenation Using '+'
let playerName = "Archer";
let playerLevel = 30;
console.log("Player name: " + playerName + " | Level: " + playerLevel);

// 3. Increment and Decrement Operators (++, --)
let questCounter = 1;
questCounter++; // Increment by 1
questCounter++;
console.log("Quests completed: " + questCounter);

let enemyHealth = 3;
enemyHealth--; // Decrements by 1;
console.log("Enemy hits remaining: " + enemyHealth);

// 4. Assignment Operators (+=, -=, *=, /=, %=)
let playerGold = 100;
playerGold += 50; // equivalent to: playerGold = playerGold + 50 (Addition assignment)
console.log("Gold after quest reward: " + playerGold);

playerGold -=30; // equivalent to: playerGold = playerGold - 30 (Subtraction assignment)
console.log("Gold after buying a potion: " + playerGold);

let itemMultiplier = 5;
itemMultiplier *= 4; // Multiplication assignment
console.log("Multiplied item value: " + itemMultiplier);
// ===============================================
// LESSON: Comparison (Relational) Operators
// ===============================================

// 1. Comparing strings and using Strict Equality/Inequality (===, !==)
let equippeWeapon = "Legendary Sword";
let targetWeapon = "Wooden Shield";

let areWeaponsDifferent = equippeWeapon !== targetWeapon; // Checks if they differ
console.log("Are the equipped and target weapons different? " + areWeaponsDifferent); // true

let playerServerRegion = "North America";
let requiredServerRegion = "North America";
let isSameServer = playerServerRegion === requiredServerRegion; // Strict comparison (value and format)
console.log("Can join regional matchmaking? " + isSameServer) // true

// 2. Checking restricted user profiles (Banned Accounts / Blacklists)
let bannerPlayerId = "ID-99283-BAN";
let visitingPlayerId = "ID-44120-REG";
let isAccountBanned = visitingPlayerId === bannerPlayerId;
console.log("Is the visiting user barred from entering? " + isAccountBanned);

let allowedGuildKey = "GOLDEN-GRIFFIN-2026";
let userProvidedKey = "SILVER-FALCON-2026";
let isKeyInvalid = userProvidedKey !== allowedGuildKey;
console.log("Is the provided guild key invalid? " + isKeyInvalid);

// 3. Numeric Comparisons (Level and Attribute Requirements)
let miniumDungeonLevel = 50;
let playerCurrentLevel = 52;
let canEnterDungeon = playerCurrentLevel >= miniumDungeonLevel;
console.log("Does the hero meet the level requirement for the raid? " + canEnterDungeon);

let maxInventoryWeightlimit = 100;
let currentInventorWeight = 100;
let isInventoryOverLoaded = currentInventorWeight <= maxInventoryWeightlimit;
console.log("Is the inventory weight within the safe limit? " + isInventoryOverLoaded);
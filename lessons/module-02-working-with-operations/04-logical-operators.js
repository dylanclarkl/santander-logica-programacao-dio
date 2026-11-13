// =============================================
// LESSON: Logical Operators (AND, OR, NOT)
// =============================================

// 1. Logical AND (&&) - All conditions must be met
let playerAge = 18;
let isVisaVerified = false;
let canTravel = (playerAge >= 18) && (isVisaVerified === true);
console.log("=== Logical AND (&&) ===");
console.log("Can the player travel internationally? " + canTravel);

// Example with game items (100 coins collected AND a start item)
let collectedCoins = 99;
let specialItem = "star";
let canUnlockBonusStage = (collectedCoins >= 100) && (specialItem === "star");
console.log("Can unlock bonus stage? " + canUnlockBonusStage); // false

// 2. Logical OR (||) - At least one condition must be met
// Character can go outside if it's NOT raining OR if they have an umbrella
let currentWeatherData = "rain";
let carriedItem = "umbrella";
let canGoOutside = (currentWeatherData !== "rain") || (carriedItem === "umbrella");
console.log("\n === Logical OR (||) ===");
console.log("Can our character go outside? " + canGoOutside); // true

// 3. Logical NOT (!) - Inverts the boolean expression
let isRaining = true;
let isItRainingCheck = isRaining === true;
console.log("\n === Logical NOT (!) ===");
console.log("Is it raining? " + isItRainingCheck); // true
console.log("Inverted statement ( NOT true ): " + !isItRainingCheck); // false

// Complex evaluation using NOT operator with grouped conditions
let weatherCondition = "rain";
let currentHour = 8;
let isRestrictedAcess = !((weatherCondition !== "rain") && (currentHour > 6));
 console.log("Is access restricted based on weather and time? " + isRestrictedAcess); // true
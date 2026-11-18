// ===================================================
// LESSON: Conditional Structures (if, else if, else)
// ===================================================

// 1. Basic IF Statement - Checking inventory and grocery conditions
let hasEggs = true;
let purchasedItems = "";

if (hasEggs) {
     purchasedItems = "Milk";
} else {
    console.log("Passed by the frozen aisle.");
    purchasedItems = "Frozen Lasagna";
}

console.log("Item purchased: " + purchasedItems);

// 2. IF, ELSE IF, ELSE Chain - Evaluating hero hunger levels
let hungerLevel = 2; // 1: Low hunger, 2: High hunger, Other: Extreme hunger

if (hungerLevel === 1) {
    console.log("Low hunger. A small snack will suffice.");
} else if (hungerLevel === 2) {
    console.log("High hunger! The hero needs a hearty meal.");
} else {
    console.log("Extreme hunger! The hero can eat an entire feast.");
}

// 3. Adventure Scenario: Hero choosing paths in a magical forest
let leftPathStatus = "brokenBridge";

if (leftPathStatus === "obstacle") {
    console.log("Left path is blocked by an obstacle. Trying the right path...");
} else if (leftPathStatus === "brokenBridge") {
    console.log("Oh no! The bridge on the left path is broken. Looking for another route...");
} else {
    console.log("Left path is clear and safe. Following the left path to the castle!");
}
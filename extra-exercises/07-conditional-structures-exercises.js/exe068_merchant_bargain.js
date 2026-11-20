// Exercise 068: Merchant Reputation Discount
// Objective: Calculate item discount based on reputation tiers

let reputationPoints = 60;
let itemPrice = 100;
let reputationTier;
let discountRate;

if (reputationPoints >= 100) {
    reputationTier = "Revered";
    discountRate = 0.20;
} else if (reputationPoints >= 50) {
    reputationTier = "Honored";
    discountRate = 0.10;
} else if (reputationPoints >= 10) {
    reputationTier = "Friendly";
    discountRate = 0.05;
} else {
    reputationTier = "Neutral";
    discountRate = 0.00;
}

let finalPrice = itemPrice - (itemPrice * discountRate);

console.log("Reputation: " + reputationTier + "| Discount: " + (discountRate * 100) + "% | Final Price: " + finalPrice.toFixed(2));
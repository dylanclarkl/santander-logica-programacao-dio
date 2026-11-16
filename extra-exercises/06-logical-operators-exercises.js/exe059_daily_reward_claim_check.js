// Exercise 059: Daily Reward Eligibility
// Objective: Check daily reward claim eligibility using '||'

let totalLoginDays = 7;
let madeCashPurchase = true;

// Eligible if streak target is met OR if a cash shop purchase was made
let canClaimDailyReward = (totalLoginDays >= 7) || (madeCashPurchase === true);

console.log("Can the player claim the daily reward? " + canClaimDailyReward); // true
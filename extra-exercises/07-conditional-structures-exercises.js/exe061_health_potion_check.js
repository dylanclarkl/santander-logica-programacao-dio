// Exercise 061: Health Potion Check
// Objective: Check if hero health is below 30% to trigger a warning

let maxHeroHp = 1000;
let currentHeroHp = 250;
let heroHpRatio = currentHeroHp / maxHeroHp;

if (heroHpRatio < 0.30) {
    console.log("Warning: Health is below 30%! Use a Health Potion immediately.");
} else {
    console.log("Current Health Percentage: " + (heroHpRatio * 100) + "%");
}
// Exercise 065: Elemental Damage Multiplier
// Objective: Double damage if spellElement matches enemyWeakness

let baseSpellDamage = 20;
let spellElement = "fire";
let enemyWeakness = "fire";

if (spellElement === enemyWeakness) {
    let finalDamage = baseSpellDamage * 2;
    console.log("Super Effective! Elemental Weakness Damage: " + finalDamage);
} else {
    console.log("Standard Damage: " + baseSpellDamage);
}
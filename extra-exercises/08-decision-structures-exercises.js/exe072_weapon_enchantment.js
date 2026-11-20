// Exercise 072: Weapon Elemental Enchantment
// Objective: Configure elemental effects and bonus attributes using switch-case

let enchantment = "Fire";
let specialEffectPower;
let bonusAttribute;

switch (enchantment) {
    case "Fire":
        specialEffectPower = 20;
        bonusAttribute = 20;
        break;
    case "Ice":
        specialEffectPower = 30;
        bonusAttribute = 30;
        break;
    case "Lightning":
        specialEffectPower = 10;
        bonusAttribute = 10;
        break;
    case "Shadow":
        specialEffectPower = 50;
        bonusAttribute = 50;
        break;
    default:
        specialEffectPower = 0;
        bonusAttribute = 0;
        break;
}

let totalEnchantDamage = specialEffectPower + bonusAttribute;

console.log("Damage type: " + enchantment + " | Enchantment Damage: " + totalEnchantDamage);
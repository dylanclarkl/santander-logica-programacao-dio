// Exercise 058: Heavy Armor Equipment Validation
// Objective: Check strength and class requirements using '&&'

let strength = 40;
let charClass = "Warrior";

let canEquipHeavyArmor = (strength >= 40) && (charClass === "Warrior");

console.log("Can the character equip heavy armor? " + canEquipHeavyArmor); // true
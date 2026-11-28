// ==========================================
// LESSON 01: What Functions Are and How to Create Them
// ==========================================

// 1. Function Invocation & Chaining (hoisted declaration example)
forgeWeapon();

function forgeWeapon() {
    console.log("Heating raw iron in the furnace...");
    shapeBlade();
}

function shapeBlade() {
    console.log("Hammering the blade on the anvil.");
    console.log("Forging finished!");
}

// 2. Simple Action Function
function castSpell() {
    console.log("Arcane spark! Mana energy surges through the staff.");
}

castSpell();

// 3. Function Receiving a Value When Called
function greetAdventurer(adventurerName) {
    console.log("Greetings, " + adventurerName + "! Ready for the quest?");
}

greetAdventurer("Steelheart");
greetAdventurer("Aria");
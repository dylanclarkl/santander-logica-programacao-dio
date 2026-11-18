// ===============================================
// LESSON: Decision Structures (Switch Case)
// ===============================================

// 1. Weekly Schedule Evaluation Example
let currentDayOfWeek = "Tuesday"; // Change this to test different days ("Monday", "Wednesday", etc.)

switch (currentDayOfWeek) {
    case "Monday":
        console.log("Start the week eith high energy!");
        break;
    case "Tuesday":
        console.log("Time to learn new programming concepts!");
        break;
    case "Wednesday":
        console.log("Midweek milestone, keep pushing forward!");
        break
    case "Thursday":
        console.log("Almost there, just a bit more effort!");
        break;
    case "Friday":
        console.log("Weekend is approaching, celebrate your progress!");
        break;
    default:
        console.log("It's the weekend! Rest, recharge, and have fun.");
        break;
}

// 2. RPG Character Class Selector Example
let characterClass = "Warrior";

switch (characterClass) {
    case "Warrior":
        console.log("Class Selected: Warrior | Primary Stat: Strength & Armor");
        break;
    case "Mage":
        console.log("Class Selected: Mage | Primary Stat: Intelligence & Mana");
        break;
    case "Rogue":
        console.log("Class Selected: Rogue | Primary Stat: Agility & Critical Hit");
        break;
    default:
        console.log("Class Selected: Adventurer | Primary Stat: Balanced attributes");
        break;
}
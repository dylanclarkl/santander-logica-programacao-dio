// Exercise 080: Quick Slot Skill Description
// Objective: Map hotkey numbers (1 to 4) to combat abilities and mana costs

let hotkeySlot = 2;
let skillName;
let manaCost;

switch (hotkeySlot) {
    case 1:
        skillName = "Power Slash";
        manaCost = 10;
        break;
    case 2:
        skillName = "Shield Bash";
        manaCost = 15;
        break;
    case 3:
        skillName = "Whirlwind Strike";
        manaCost = 30;
        break;
    case 4:
        skillName = "Battle Cry";
        manaCost = 20;
        break;
    default:
        skillName = "Basic Attack";
        manaCost = 0;
        break;
}

console.log("Hotkey [" + hotkeySlot + "]: " + skillName + " (Mana Cost: " + manaCost + ")");
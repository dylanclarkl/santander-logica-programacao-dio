// Exercise 077: Alchemist Potion Brew Results
// Objective: Determine potion effect based on primary herb used in brewing

let primaryHerb = "Moonleaf";
let potionEffect;

switch (primaryHerb) {
    case "Moonleaf":
        potionEffect = "Restores 80 HP over time";
        break;
    case "Sunroot":
        potionEffect = "Grants +25 Strength for 60 seconds";
        break;
    case "Nightshade":
        potionEffect = "Restores 60 Mana and boosts Critical Chance";
        break;
    default:
        potionEffect = "Unstable mixture: Minor Stamina recovery";
        break;
}

console.log("Primary Herb: " + primaryHerb + " | Potion Effect: " + potionEffect);
// Exercise 075: Crafting Station Upgrade Level
// Objective: Unlock blacksmith recipes based on station tier level

let stationLevel = 1;

switch (stationLevel) {
    case 1:
        console.log("Unlocked Tier 1 recipe for the Blacksmith Statio: Iron Dagger");
        break;
    case 2:
        console.log("Unlocked Tier 2 recipe for the Blacksmith Station: Steel Broadsword");
        break;
    case 3:
        console.log("Unlocked Tier 3 recipe for the Blacksmith Station: Knight Plate Amor");
        break;
    case 4:
        console.log("Unlocked Tier 4 for the Blacksmith Station: Mithril Halberd");
        break;
    case 5:
        console.log("Unlocked Tier 5 recipe for the Blacksmith Station: Dragonbone Greatsword");
        break;
    default:
        console.log("Invalid Blacksmith Station tier");
        break;
}
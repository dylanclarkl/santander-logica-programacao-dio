// ==========================================
// LESSON 02: Functions with Parameters
// ==========================================

// 1. Single Parameter - Greeting an adventurer by name
function sayHello(adventurerName) {
    console.log("Hello, " + adventurerName + "! How is your quest going?");
}

sayHello("Steelheart");
sayHello("Aria");

// 2. Multiple Parameters - Calculating character level or age from a start year
function calculateYearsActive(characterName, startYear, currentYear = 2026) {
    let yearsActive = currentYear - startYear;
    console.log(characterName + " has been active for " + yearsActive + " years.");
}

calculateYearsActive("Steelheart", 2022);
calculateYearsActive("Aria", 2018, 2026);
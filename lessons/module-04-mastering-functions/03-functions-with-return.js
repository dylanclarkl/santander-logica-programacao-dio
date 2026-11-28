// ==========================================
// LESSON 03: Functions with Return
// ==========================================

// 1. Extracting the first part of a name or title using a custom delimiter
function getFirstName(fullName, delimiter) {
    let firstPart = fullName.split(delimiter)[0];
    return firstPart;
}

let heroName = getFirstName("Steelheart-of-the-Iron-Fist", "-");
console.log("Welcome, " + heroName + "!");

heroName = getFirstName("Aria Windrunner of Silvervale", " ");
console.log("Welcome, " + heroName + "!");

// 2. Returning a calculated total (e.g., combined XP or damage points)
function sumPoints(firstPoints, secondPoints) {
    return firstPoints + secondPoints;
}

let totalXpEarned = sumPoints(120, 80);
console.log("Total XP earned: " + totalXpEarned);
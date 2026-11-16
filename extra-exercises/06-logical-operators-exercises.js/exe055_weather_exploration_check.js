// Exercise 055: Weather Exploration Conditions
// Objective: Check if character can explore using '||' and '!=='

let weather = "storm";
let hasUmbrella = true;

// Can go outside if weather is NOT storm OR if carrying an umbrella
let canExploreOutside = (weather !== "storm") || (hasUmbrella === true);

console.log("Can the character explore outside? " + canExploreOutside); // true
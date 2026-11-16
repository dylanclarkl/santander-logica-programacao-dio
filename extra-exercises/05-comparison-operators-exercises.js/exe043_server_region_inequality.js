// Exercise 043: Server Region Strict Inequality
// Objective: Check if userRegion is strictly different from maintenanceRegion using '!=='

let userRegion = "South America";
let maintenanceRegion = "North America";

// Checking if the user is outside the maintenance region
let isRegionDifferent = (userRegion !== maintenanceRegion);

console.log("Is region different from maintenance? " + isRegionDifferent); // true
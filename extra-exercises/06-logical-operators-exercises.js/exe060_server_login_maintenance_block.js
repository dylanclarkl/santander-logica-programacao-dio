// Exercise 060: Server Maintenance Login Block
// Objective: Use parentheses and '!' to block login during maintenance unless admin

let isServerUnderMaintenance = true;
let isUserAdmin = false;

// Block login if server is under maintenance AND user is NOT an admin
let isLoginBlocked = !(!isServerUnderMaintenance || isUserAdmin);

console.log("Is server login blocked? " + isLoginBlocked); // true
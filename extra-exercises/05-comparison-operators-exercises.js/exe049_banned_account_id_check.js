// Exercise 049: Banned Account ID Validation
// Objective: Verify if userId is strictly different from bannedId using '!=='

let bannedId = "ID-01234578";
let userId = "ID-12385678";

// Checking if the user ID is not on the banned list
let isIdValid = (userId !== bannedId);

console.log("Is account ID valid and unbanned? " + isIdValid); // true
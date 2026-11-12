// ==================================================
// LESSON: Variables, Constants, and Data Types
// ==================================================

// 1. Declaring variables with 'let' (values that can change)
let nickname = "Maria mestra do Pikachu";

// Concatenating a fixed message with a variable
console.log("Welcome, " + nickname);
console.log(nickname + " joined the server");

// 2. Declaring constants with 'const' (values that never change)
const notification = "Pokemon Go says: ";

console.log(notification + "there is a new pokemon in the region");
console.log(notification + "you were defeated by a gym leader");

// 3. Pratical Example: Grandma's cookie recipes kitche jars
let coffeJar = "Pilao Coffee";
let sugarJar = "Crystal Sugar";
let cookieJar = "Maizena Cookies";

const grandmasMessage = "In grandma's kitchen today we have: ";

// Updating a variable value
coffeJar = "Nescafe Coffee";
console.log(grandmasMessage + coffeJar + ", " + sugarJar + ", and " + cookieJar);

// 4. Different Data Types (Pokémon Example)
let pokemonName = "Pikachu"; // String (Text)
let pokemonGender = "M"; // String (Character)
let pokemonLevel = 20; // Number (Integer)
let pokemonHp = 45.5; // Number (Decimal)
let isSelectable = true; // Boolean (True or False)

console.log("Pokemon: " + pokemonName + " | Level: " + pokemonLevel + " | HP: " + pokemonHp);
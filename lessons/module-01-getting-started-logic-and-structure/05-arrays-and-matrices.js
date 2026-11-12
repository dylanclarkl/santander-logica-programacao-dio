// ===============================================
// LESSON: Arrays (Vectors) and Matrices
// ===============================================

// 1. Arrays (One-dimensional list)
// Stores multiples values in a single row structure
let pokemonNames = ["Pikachu", "Charmander", "Bulbasaur"];

// Acessing array elements using zero-based index
console.log("First Pokemon:", pokemonNames[0]); // Pikachu
console.log("Second Pokemon:", pokemonNames[1]); // Charmander
console.log("Third Pokemon:", pokemonNames[2]); // Bulbasaur

// 2. Matrices (Two-dimensional array / rows and columns)
let pokemonTeam = [
    ["Pikachu", "M", 1],
    ["Charmander", "F", 3]
];

// Acessing specific elements using [row][column] indexes
// Row 1 ("Charmander"), Column 0 (Name), Column 1 (Gender), Column 2 (Level)
console.log(
    "The pokemon " + pokemonTeam[1][0] +
    " is gender " + pokemonTeam[1][1] +
    " and is level " + pokemonTeam[1][2]
);
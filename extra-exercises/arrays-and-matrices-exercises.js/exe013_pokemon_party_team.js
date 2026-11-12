// Exercise 03: Pokémon Party Team (Matrix 2D)
// Objective: Create a 2D array (matrix) containing the name and type of three Pokémon on the team.

// Declaring a 2D array (matrix) where each sub-array holds a Pokémon's name and elemental type
let battleTeam = [
    ["Pikachu", "Electric"],
    ["Charmander", "Fire"],
    ["Squirtle", "Water"]
];

// Accessing the first Pokémon (row 0) and displaying its name (column 0) and type (column 1)
console.log("Slot 1 Pokemon: " + battleTeam[0][0] + " of type " + battleTeam[0][1]);

// Accessing the third Pokémon (row 2) and displaying its name (column 0) and type (column 1)
console.log("Slot 3 Pokemon: " + battleTeam[2][0] + " of type " + battleTeam[2][1]);
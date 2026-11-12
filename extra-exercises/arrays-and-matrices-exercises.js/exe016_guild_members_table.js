// Exercise 06: Guild Members Table (Matrix)
// Objective: Store Member Name, Class, and Level in a 2D array (matrix).

// Declaring a 2D array (matrix) where each sub-array holds a guild member's name, class, and level
let guildMembers = [
    ["ShadowKnight", "Warrior", 45],
    ["ElvenQueen", "Mage", 48],
    ["RogueMaster", "Assassin", 42]
];

// Accessing the second member (row 1) and displaying their name (col 0), class (col 1), and level (col 2)
console.log(
    "Member: " + guildMembers[1][0] +
    " | Class: " + guildMembers[1][1] +
    " | Level: " + guildMembers[1][2]
);
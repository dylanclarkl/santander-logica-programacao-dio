// Exercise 09: Strategy Board Grid (Matrix)
// Objective: Create a matrix that simulates a simple 2x2 strategy board.

// Declaring a 2D array (matrix) representing a 2x2 strategy board grid with units and items
let boardGrid = [
    ["Player Unit", "Empty"],
    ["Trap", "Enemy Unit"]
];

// Accessing and displaying the element at row 0, column 0 (top-left)
console.log("Position [0][0]: " + boardGrid[0][0]); // Player Unit

// Accessing and displaying the element at row 1, column 0 (bottom-left)
console.log("Position [1][0]: " + boardGrid[1][0]); // Trap
// Exercise 05: Audio Settings (Floats)
// Objective: Store audio volume levels using decimal numbers.

// Declaring floating-point variables for volume levels (0.0 to 1.0 scale)
let masterVolume = 0.8;
let sfxVolume = 0.5;

// Declaring a boolean variable to track if the audio is muted
let isMuted = false;

// Converting the decimal values into percentages and displaying them in the console
console.log("Master Volume: " + (masterVolume * 100) + "%");
console.log("Effects Volume: " + (sfxVolume * 100) + "%");
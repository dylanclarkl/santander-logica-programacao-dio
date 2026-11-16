// Exercise 046: Leaderboard High Score Match
// Objective: Check if playerHighScore matches globalLeaderboardTarget using '==='

let playerHighScore = 2850;
let globalLeaderboardTarget = 3000;

// Checking for an exact score match
let isTopScoreMatched = (playerHighScore === globalLeaderboardTarget);

console.log("Does player match the target high scores? " + isTopScoreMatched); // false
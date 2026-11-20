// Exercise 078: Quest Journal Status Display
// Objective: Map numeric quest status code to readable status label

let questStatusCode = 0;
let questStatusLabel;

switch (questStatusCode) {
    case 0:
        questStatusLabel = "Not Started";
        break;
    case 1:
        questStatusLabel = "In Progress";
        break;
    case 2:
        questStatusLabel = "Completed";
        break;
    default:
        questStatusLabel = "Unknown Status";
        break;
}

console.log("Quest Code: " + questStatusCode + " | Quest Status: " + questStatusLabel);
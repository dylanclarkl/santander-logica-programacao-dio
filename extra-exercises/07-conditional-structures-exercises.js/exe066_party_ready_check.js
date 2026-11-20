// Exercise 066: Raid Party Ready Check
// Objective: Confirm if all party members are online and ready

let isTankReady = true;
let isHealerReady = true;
let isDpsReady = false;

if (isTankReady && isHealerReady && isDpsReady) {
    console.log("All party members are ready! Entering the dungeon...");
} else {
    console.log("Dungeon entry canceled: Waiting for all party members to confirm readiness");
}
// Exercise 071: Guild Rank Daily Perks
// Objective: Display daily login rewards based on guild rank using switch-case

let guildRank = "Bronze";
let dailyReward;

switch (guildRank) {
    case "Bronze":
        dailyReward = 10;
        break;
    case "Silver":
        dailyReward = 20;
        break;
    case "Gold":
        dailyReward = 30;
        break;
    case "Platinum":
        dailyReward = 40;
        break;
    default:
        dailyReward = 5;
}

console.log("Guild Rank: " + guildRank + " | Daily Reward: " + dailyReward + " gold coins");
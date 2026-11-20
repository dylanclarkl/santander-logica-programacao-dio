// Exercise 079: Region Weather Switch
// Objective: Set environmental weather and visual atmosphere by map region

let mapRegion = "Tundra";
let weatherCondition;
let lightingEffect;

switch (mapRegion) {
    case "Forest":
        weatherCondition = "Light Mist";
        lightingEffect = "Soft Emerald Sunlight";
        break;
    case "Desert":
        weatherCondition = "Sandstorm";
        lightingEffect = "Harsh Golden Glare";
        break;
    case "Tundra":
        weatherCondition = "Heavy Snowfall";
        lightingEffect = "Pale Arctic Blue";
        break;
    default:
        weatherCondition = "Clear Skies";
        lightingEffect = "Neutral Daylight";
        break;
}

console.log("Region: " + mapRegion + " | Weather: " + weatherCondition + " | Lighting: " + lightingEffect);
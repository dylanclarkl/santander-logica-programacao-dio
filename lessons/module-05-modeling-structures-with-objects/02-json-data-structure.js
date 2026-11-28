// ==========================================
// LESSON 02: JSON Data Structure
// ==========================================

// 1. Structured order / guild supply receipt data
let supplyOrder = {
    adventurerName: "Steelheart",
    level: 28,
    items: {
        0: ["Health Potion", 29.90],
        1: ["Training Gloves", 129.99],
        2: ["Arena Boots", "899.99"],
        3: ["Mythic Greatsword", "10000.90"]
    },
    taxFee: "98.90"
};

generateSupplyReceipt(supplyOrder);

function generateSupplyReceipt(order) {
    console.log(`Adventurer: ${order.adventurerName}`);
    console.log(`Level: ${order.level}`);
    console.log("------------");

    for (let slotIndex in order.items) {
        let [itemName, itemPrice] = order.items[slotIndex];
        console.log(`- ${itemName}: ${itemPrice}`);
    }
}

// 2. Array of objects and JSON serialization
let companions = [
    { "name": "Pip", "color": "gold", "species": "phoenix" },
    { "name": "Bramble", "color": "brown", "species": "wolf" }
];

let selectedCompanion = companions[0];
console.log(`Selected companion: ${selectedCompanion.name} (${selectedCompanion.color} ${selectedCompanion.species})`);

let serializedCompanions = JSON.stringify(companions);
console.log("Serialized companions JSON:", serializedCompanions);
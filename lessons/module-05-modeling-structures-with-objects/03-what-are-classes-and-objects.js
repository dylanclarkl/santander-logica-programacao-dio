// ==========================================
// LESSON 03: What Are Classes and Objects
// ==========================================

// 1. Defining a Class Blueprint for Combat Heroes
class CombatHero {
    // Constructor initializes properties for each new instance
    constructor(name, fightingStyle, level, baseDamage) {
        this.name = name;
        this.fightingStyle = fightingStyle;
        this.level = level;
        this.baseDamage = baseDamage;
        this.hp = 100;
    }

    // Instance method to perform a signature attack
    performAttack(targetName) {
        console.log(
            `${this.name} (${this.fightingStyle} - Lv.${this.level}) attacks ${targetName} for ${this.baseDamage} damage!`
        );
    }

    // Instance method to update internal state
    receiveDamage(damageAmount) {
        this.hp = Math.max(0, this.hp - damageAmount);
        console.log(`${this.name} took ${damageAmount} damage. Current HP: ${this.hp}`);
    }
}

// 2. Instantiating independent Objects from the CombatHero class
const strikerHero = new CombatHero("Steelheart", "Muay Thai", 28, 45);
const grapplerHero = new CombatHero("Kael", "Jiu-Jitsu", 24, 32);

// 3. Interacting with each object's properties and methods
strikerHero.performAttack("Iron Golem");
grapplerHero.performAttack("Shadow Assassin");

strikerHero.receiveDamage(30);
console.log(`Remaining HP check -> ${strikerHero.name}: ${strikerHero.hp} | ${grapplerHero.name}: ${grapplerHero.hp}`);
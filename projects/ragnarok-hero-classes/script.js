// =========================================================================
// PART 1: UI AND DOM SETUP
// =========================================================================

const heroForm = document.getElementById("hero-form");
const heroNameInput = document.getElementById("hero-name");
const heroAgeInput = document.getElementById("hero-age");
const heroTypeSelect = document.getElementById("hero-type");
const charAvatar = document.getElementById("char-avatar");
const previewClass = document.getElementById("preview-class");
const battleLog = document.getElementById("battle-log");
const btnClearLog = document.getElementById("btn-clear-log");
const btnPartyAttack = document.getElementById("btn-party-attack");

const classSprites = {
    guerreiro: "⚔️",
    mago: "🔮",
    monge: "👊",
    ninja: "🥷"
};

// Update character sprite and class badge when the class selector changes
heroTypeSelect.addEventListener("change", () => {
    const selectedType = heroTypeSelect.value;
    charAvatar.textContent = classSprites[selectedType] || "⚔️";
    const formattedClassName = selectedType.charAt(0).toUpperCase() + selectedType.slice(1);
    previewClass.textContent = `Class: ${formattedClassName}`;
});

// Helper function to append a new entry into the Ragnarok Battle Log
function renderBattleLog(message, logStyle = "log-attack") {
    const logLine = document.createElement("div");
    logLine.className = logStyle;
    logLine.textContent = `> ${message}`;
    battleLog.appendChild(logLine);
    battleLog.scrollTop = battleLog.scrollHeight;

    // Trigger a brief attack movement on the character sprite
    charAvatar.classList.add("attack-anim");
    setTimeout(() => charAvatar.classList.remove("attack-anim"), 200);
}

// Clear Battle Log messages
btnClearLog.addEventListener("click", () => {
    battleLog.innerHTML = `<div class="log-system">[System] Log cleared.</div>`;
});


// =========================================================================
// PART 2: HERO CLASS AND BATTLE LOGIC (DIO CHALLENGE)
// =========================================================================

class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack() {
        let attackDescription;

        switch (this.type) {
            case "mago":
                attackDescription = "usou magia";
                break;
            case "guerreiro":
                attackDescription = "usou espada";
                break;
            case "monge":
                attackDescription = "usou artes marciais";
                break;
            case "ninja":
                attackDescription = "usou shuriken";
                break;
            default:
                attackDescription = "usou um ataque básico";
                break;
        }

        return `o ${this.type} atacou usando ${attackDescription}`;
    }
}

// Handle form submission to instantiate Hero and render the attack message
heroForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const heroName = heroNameInput.value.trim();
    const heroAge = Number(heroAgeInput.value);
    const heroType = heroTypeSelect.value;

    const hero = new Hero(heroName, heroAge, heroType);
    const attackMessage = hero.attack();

    renderBattleLog(attackMessage, "log-attack");
});

// Handle party attack by looping through a list of heroes
btnPartyAttack.addEventListener("click", () => {
    const partyMembers = [
        new Hero("Merlin", 45, "mago"),
        new Hero("Steelheart", 28, "guerreiro"),
        new Hero("Acolyte", 24, "monge"),
        new Hero("Hanzo", 26, "ninja")
    ];

    for (let i = 0; i < partyMembers.length; i++) {
        const partyAttackMessage = partyMembers[i].attack();
        renderBattleLog(partyAttackMessage, "log-party");
    }
});
// DOM Elements selection
const heroForm = document.getElementById('heroForm');
const heroNameInput = document.getElementById('heroName');
const heroXpInput = document.getElementById('heroXp');
const statusPanel = document.getElementById('statusPanel');
const rankBadge = document.getElementById('rankBadge');
const resultMessage = document.getElementById('resultMessage');
const xpCounter = document.getElementById('xpCounter');
const progressFill = document.getElementById('progressFill');
const historyList = document.getElementById('historyList');
const btnSimular = document.getElementById('btnSimular');
const btnClear = document.getElementById('btnClear');

// Array to store evaluated heroes history
let heroHistory = [];

// Function to classify hero level using decision structures & operators
function classifyHeroLevel(xp) {
    let level = "";
    let color = "";

    if (xp <= 1000) {
        level = "Ferro";
        color = "#94a3b8";
    } else if (xp >= 1001 && xp <= 2000) {
        level = "Bronze";
        color = "#d97706";
    } else if (xp >= 2001 && xp <= 5000) {
        level = "Prata";
        color = "#e2e8f0";
    } else if (xp >= 5001 && xp <= 7000) {
        level = "Ouro";
        color = "#facc15";
    } else if (xp >= 7001 && xp <= 8000) {
        level = "Platina";
        color = "#2dd4bf";
    } else if (xp >= 8001 && xp <= 9000) {
        level = "Ascendente";
        color = "#a855f7";
    } else if (xp >= 9001 && xp <= 10000) {
        level = "Imortal";
        color = "#ef4444";
    } else {
        level = "Radiante";
        color = "#00d4ff";
    }

    return { level, color };
}

// Function to update UI with the exact required output message
function updateStatusUI(name, xp) {
    const { level, color } = classifyHeroLevel(xp);

    // Apply dynamic theme color to the status card
    statusPanel.style.setProperty('--accent-color', color);
    statusPanel.style.borderColor = color;

    // Update badge and required DIO output message
    rankBadge.textContent = level;
    resultMessage.innerHTML = `O Herói de nome <strong>${name}</strong> está no nível de <strong>${level}</strong>`;

    // Calculate progress bar percentage (capped at 100% for >= 10,001 XP)
    const percentage = Math.min((xp / 10001) * 100, 100);
    xpCounter.textContent = `${xp.toLocaleString('pt-BR')} XP`;
    progressFill.style.width = `${percentage}%`;

    // Save to history and re-render using a loop
    heroHistory.unshift({ name, xp, level, color });
    renderHistory();
}

// Loop structure to render evaluated heroes
function renderHistory() {
    historyList.innerHTML = "";

    if (heroHistory.length === 0) {
        historyList.innerHTML = '<li class="empty-msg">Nenhum herói avaliado nesta sessão.</li>';
        return;
    }

    for (let i = 0; i < heroHistory.length; i++) {
        const hero = heroHistory[i];
        const li = document.createElement('li');
        li.className = 'history-item';
        li.style.borderLeftColor = hero.color;

        li.innerHTML = `
            <span><strong>${hero.name}</strong> (${hero.xp.toLocaleString('pt-BR')} XP)</span>
            <span style="color: ${hero.color}; font-weight: 700;">${hero.level.toUpperCase()}</span>
        `;

        historyList.appendChild(li);
    }
}

// Form submission event
heroForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const heroName = heroNameInput.value.trim();
    const heroXp = Number(heroXpInput.value);

    if (heroName !== "" && !isNaN(heroXp) && heroXp >= 0) {
        updateStatusUI(heroName, heroXp);
    }
});

// Quick simulation button for testing different ranks
btnSimular.addEventListener('click', () => {
    const sampleHeroes = ["Sung Jin-Woo", "Rock Lee", "Roronoa Zoro", "Asta", "Clark Kent"];
    const randomName = sampleHeroes[Math.floor(Math.random() * sampleHeroes.length)];
    const randomXp = Math.floor(Math.random() * 11500);

    heroNameInput.value = randomName;
    heroXpInput.value = randomXp;
    updateStatusUI(randomName, randomXp);
});

// Clear history button
btnClear.addEventListener('click', () => {
    heroHistory = [];
    renderHistory();
});
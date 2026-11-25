// Select DOM elements for the form, inputs, and output displays
const rankedForm = document.getElementById("ranked-form");
const winsInput = document.getElementById("vitorias");
const lossesInput = document.getElementById("derrotas");
const outputMessage = document.getElementById("mensagem-saida");
const balanceDisplay = document.getElementById("saldo-valor");
const tierDisplay = document.getElementById("nivel-valor");

/**
 * Calculates the ranked balance and determines the player's tier based on total wins.
 * @param {number} wins - Total number of wins
 * @param {number} losses - Total number of losses
 * @returns {{ balance: number, tier: string }}
 */
function calculateRankedStats(wins, losses) {
  const balance = wins - losses;
  let tier = "";

  if (wins <= 10) {
    tier = "Ferro";
  } else if (wins >= 11 && wins <= 20) {
    tier = "Bronze";
  } else if (wins >= 21 && wins <= 50) {
    tier = "Prata";
  } else if (wins >= 51 && wins <= 80) {
    tier = "Ouro";
  } else if (wins >= 81 && wins <= 90) {
    tier = "Diamante";
  } else if (wins >= 91 && wins <= 100) {
    tier = "Lendário";
  } else {
    tier = "Imortal";
  }

  return { balance, tier };
}

/**
 * Updates the UI with the formatted result message and badge values.
 * @param {number} balance - Net win/loss balance
 * @param {string} tier - Calculated rank tier
 */
function renderResult(balance, tier) {
  outputMessage.innerHTML = `O Herói tem de saldo de <strong>${balance}</strong> está no nível de <strong>${tier}</strong>`;
  balanceDisplay.textContent = balance;
  tierDisplay.textContent = tier;
}

/**
 * Runs a batch test loop in the console to verify all tier boundaries.
 */
function runTierValidationTests() {
  const testCases = [
    { wins: 5, losses: 2 },
    { wins: 15, losses: 10 },
    { wins: 35, losses: 20 },
    { wins: 65, losses: 30 },
    { wins: 85, losses: 40 },
    { wins: 95, losses: 50 },
    { wins: 120, losses: 45 },
  ];

  for (let i = 0; i < testCases.length; i++) {
    const { wins, losses } = testCases[i];
    const { balance, tier } = calculateRankedStats(wins, losses);
    console.log(`[Test #${i + 1}] Wins: ${wins} | Losses: ${losses} => Balance: ${balance}, Tier: ${tier}`);
  }
}

// Listen for form submission to process inputs without reloading the page
rankedForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const wins = Number(winsInput.value);
  const losses = Number(lossesInput.value);

  // Guard against invalid or negative numbers
  if (Number.isNaN(wins) || Number.isNaN(losses) || wins < 0 || losses < 0) {
    outputMessage.textContent = "Por favor, insira valores numéricos válidos e não negativos.";
    balanceDisplay.textContent = "-";
    tierDisplay.textContent = "-";
    return;
  }

  const { balance, tier } = calculateRankedStats(wins, losses);
  renderResult(balance, tier);
});

// Execute console tests on script load (optional verification)
runTierValidationTests();
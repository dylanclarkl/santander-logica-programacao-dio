// ==========================================
// CHALLENGE: Bank Withdrawal Simulator
// ==========================================
// DIO JavaScript challenges provide global "gets" and "print" functions:
// - "gets" : reads ONE line of user input;
// - "print": prints an output string followed by a new line.

const input = gets();

function calculateWithdrawal(amount) {
    // Parse the input string into a mutable integer value
    let withdrawalAmount = parseInt(amount);

    if (withdrawalAmount === 0) {
        return "0";
    }

    // Validate allowed range (10 to 1000) and ensure the amount is a multiple of 10
    if (withdrawalAmount < 10 || withdrawalAmount > 1000 || withdrawalAmount % 10 !== 0) {
        return "Insira uma quantia valida";
    }

    // Counters for each available banknote denomination
    let bills50 = 0;
    let bills20 = 0;
    let bills10 = 0;

    // Dispense 50-unit bills while the remaining amount allows
    while (withdrawalAmount >= 50) {
        bills50++;
        withdrawalAmount -= 50;
    }

    // Dispense 20-unit bills while the remaining amount allows
    while (withdrawalAmount >= 20) {
        bills20++;
        withdrawalAmount -= 20;
    }

    // Dispense 10-unit bills while the remaining amount allows
    while (withdrawalAmount >= 10) {
        bills10++;
        withdrawalAmount -= 10;
    }

    // Return the banknote count in the required format
    return `50:${bills50} 20:${bills20} 10:${bills10}`;
}

print(calculateWithdrawal(input));
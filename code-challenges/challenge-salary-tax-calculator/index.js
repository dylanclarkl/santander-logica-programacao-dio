// ==========================================
// CHALLENGE: Salary Tax Calculator
// ==========================================
// DIO JavaScript challenges provide global "gets" and "print" functions:
// - "gets" : reads ONE line of user input;
// - "print": prints an output string followed by a new line.

// Function to calculate the tax based on salary rules
function calculateTax(salary) {
    if (salary <= 3000) {
        // 5% tax on the total salary if it is 3,000 or less
        return salary * 0.05;
    } else {
        // 10% tax only on the amount exceeding 3,000
        return (salary - 3000) * 0.10;
    }
}

// Read user input
let salary = parseFloat(gets());

// Calculate the tax amount
let tax = calculateTax(salary);

// Print output formatted to two decimal places
print(tax.toFixed(2));
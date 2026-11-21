// ==========================================
// CHALLENGE: Transaction Count
// ==========================================
// DIO JavaScript challenges provide global "gets" and "print" functions:
// - "gets" : reads ONE line of user input;
// - "print": prints an output string followed by a new line.

// Read the first line of input and convert it to an integer representing the customer count (N)
const customerCount = parseInt(gets());

// Initialize the accumulator for total transactions and the loop counter
let totalTransactions = 0;
let processedCustomers = 0;

// Loop N times to read each customer's transactions and add them to the total
while (processedCustomers < customerCount) {
    let clientTransactions = parseInt(gets());
    totalTransactions += clientTransactions;
    processedCustomers++;
}

// Output the total transaction count in the required format
print(`${totalTransactions} transacoes no total`);
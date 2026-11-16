// ==========================================
// CHALLENGE: Bank Account Manager
// ==========================================
// DIO JavaScript challenges provide global "gets" and "print" functions:
// - "gets" : reads ONE line of user input;
// - "print": prints an output string followed by a new line.

const input = gets();

function calculateBalance(operations) {
    // Initialize the total balance at zero
    let balance = 0;

    // Split the input string into an array of operations using a comma delimiter
    const operationList = operations.split(',');

    // Iterate over each operation in the array
    operationList.forEach(operation => {
        // Trim whitespace and split the operation into type and value
        const [type, amountStr] = operation.trim().split(' ');
        const amount = parseInt(amountStr); // Parse the string amount into an integer

        // Check if the transaction type is a deposit or withdrawal and update the balance
        if (type === "deposito") {
            balance += amount;
        } else {
            balance -= amount;
        }
    });

    // Return the final total balance formatted as a string
    return balance.toString();
}

print(calculateBalance(input));
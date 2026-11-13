# 📝 Class 01: Understanding Operators and Expressions

## 📌 Main Concepts
An **expression** is any valid unit of code that resolves to a value. **Operators** are special symbols or keywords used to perform operations on operands (variables and values). In game development, operators drive game mechanics, combat math, rules, and conditional logic.

---

## 🛠️ Summary of JavaScript Operators

### 1. Arithmetic Operators
Used to perform mathematical calculations (such as calculating damage, gold, or stats):
* **Addition (`+`)**: Adds values (e.g., `let totalGold = 5 + 3;`).
* **Subtraction (`-`)**: Subtracts values (e.g., `let remainingHp = 8 - 2;`).
* **Multiplication (`*`)**: Multiplies values (e.g., `let criticalDamage = 4 * 6;`).
* **Division (`/`)**: Divides values (e.g., `let splitXp = 10 / 2;`).
* **Modulus (`%`)**: Returns the division remainder (e.g., `let remainder = 10 % 3;`).

### 2. Relational / Comparison Operators
Used to compare values and return a boolean result (`true` or `false`):
* **Equal to (`==`)**: Checks if values are equal (e.g., `let isEqual = (x == y);`).
* **Not equal to (`!=`)**: Checks if values are different (e.g., `let isNotEqual = (x != y);`).
* **Greater than (`>`)**: Checks if the left side is greater (e.g., `let isGreater = (x > y);`).
* **Less than (`<`)**: Checks if the left side is lesser (e.g., `let isLess = (x < y);`).
* **Greater than or equal to (`>=`)**: (e.g., `let isGreaterOrEqual = (x >= y);`).
* **Less than or equal to (`<=`)**: (e.g., `let isLessOrEqual = (x <= y);`).

### 3. Logical Operators
Used to combine multiple conditions or invert logical states:
* **Logical AND (`&&`)**: Returns true if *both* conditions are met.
* **Logical OR (`||`)**: Returns true if *at least one* condition is met.
* **Logical NOT (`!`)**: Inverts the boolean state.

### 4. Assignment Operators
Used to assign or update variable values efficiently:
* **Assignment (`=`)**: `let x = 5;`
* **Addition Assignment (`+=`)**: `num += 2;` (adds and assigns)
* **Subtraction Assignment (`-=`)**: `num -= 3;`
* **Multiplication Assignment (`*=`)**: `num *= 4;`
* **Division Assignment (`/=`)**: `num /= 2;`
* **Modulus Assignment (`%=`)**: `num %= 3;`

### 5. Increment and Decrement Operators
Used to quickly increase or decrease a variable's value by 1:
* **Increment (`++`)**: `counter++;`
* **Decrement (`--`)**: `counter--;`
# 🏧 Challenge: Bank Withdrawal Simulator

## 🎯 Objective
Develop a withdrawal calculation function in **JavaScript** that dispenses cash using only `50`, `20`, and `10` banknotes, returning the exact count of each denomination or a validation error message for invalid amounts.

---

## 📋 Rules & Specifications

* **Input:** A string representing the requested withdrawal amount as a positive integer between `10` and `1000` without extra spaces or characters.
* **Validation & Dispensing:**
  * Reject amounts outside the `10` to `1000` range or values that are not multiples of `10` (since banknotes are limited to `50`, `20`, and `10`).
  * Greedily dispense `50` bills first, then `20` bills, and finally `10` bills using `while` loops and subtraction assignment (`-=`).
* **Output:** A string formatted as `"50:n 20:m 10:k"`, where `n`, `m`, and `k` represent the counts of `50`, `20`, and `10` banknotes, or `"Insira uma quantia valida"` when invalid.

---

## 📊 Test Cases

| Input | Expected Output |
| :--- | :--- |
| `80` | `50:1 20:1 10:1` |
| `90` | `50:1 20:2 10:0` |
| `15` | `Insira uma quantia valida` |
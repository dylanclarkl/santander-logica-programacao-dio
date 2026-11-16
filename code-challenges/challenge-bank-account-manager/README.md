# 🏦 Challenge: Bank Account Manager

## 🎯 Objective
Develop a bank account management function in **JavaScript** capable of processing a sequence of comma-separated financial transactions (`"deposito"` and `"saque"`) and returning the final consolidated balance as an integer string.

---

## 📋 Rules & Specifications

* **Input:** A single string containing multiple operations separated by commas (e.g., `"deposito 100, saque 30, deposito 50"`). Each operation follows the `"type value"` format, where `"type"` is either `"deposito"` (deposit) or `"saque"` (withdrawal), and `"value"` is an integer.
* **Processing:** Iterate through each transaction, parse the operation type and numeric amount, and update the running balance using conditional statements (`if / else`) and compound assignment operators (`+=` / `-=`).
* **Output:** A string representing the final net balance formatted as an integer.

---

## 📊 Test Cases

| Input | Expected Output |
| :--- | :--- |
| `deposito 100, saque 30, deposito 50` | `120` |
| `deposito 200, deposito 300, saque 100` | `400` |
| `saque 50, deposito 100, saque 20` | `30` |
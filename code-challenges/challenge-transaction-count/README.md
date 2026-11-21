# 💳 Challenge: Transaction Count

## 🎯 Objective
Develop a JavaScript program to calculate the total number of bank transactions performed across multiple customers during a day using loop structures and accumulation.

---

## 📋 Rules & Specifications

* **Input:** The first line contains an integer `N` (from 1 to 100) representing the number of customers. Each of the following `N` lines contains an integer `T` (from 0 to 100) representing the number of transactions made by a customer.
* **Processing:** Read `N`, iterate `N` times using a loop to read each customer's transaction count, and accumulate the sum into a total counter.
* **Output:** A string displaying the total transaction count followed by `" transacoes no total"`.

---

## 📊 Test Cases

| Input | Expected Output |
| :--- | :--- |
| `3`<br>`5`<br>`3`<br>`0` | `8 transacoes no total` |
| `2`<br>`10`<br>`15` | `25 transacoes no total` |
| `2`<br>`1`<br>`2` | `3 transacoes no total` |
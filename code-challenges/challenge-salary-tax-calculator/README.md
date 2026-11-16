# 💰 Challenge: Salary Tax Calculator

## 🎯 Objective
Develop a JavaScript function to calculate the tax deduction on a bank employee's salary based on specific progressive tier rules.

---

## 📋 Rules & Specifications

* **Input:** A floating-point number representing the employee's salary.
* **Calculation Rules:** 
  * If the salary is less than or equal to 3,000, the tax is 5% of the total salary.
  * If the salary is greater than 3,000, the tax is 10% only on the amount exceeding 3,000.
* **Output:** The final calculated tax formatted to two decimal places.

---

## 📊 Test Cases

| Input | Expected Output |
| :--- | :--- |
| `2000` | `100.00` |
| `3500` | `50.00` |
| `5000` | `200.00` |
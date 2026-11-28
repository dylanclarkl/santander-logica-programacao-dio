# 📝 Class 02: JSON Data Structure

## 📌 Main Concepts
JSON (JavaScript Object Notation) organizes structured data using `key: value` pairs to store and transfer information cleanly. It supports nested objects, arrays of objects, and indexed collections that functions can traverse and format.

---

## 🛠️ Core Fundamentals

* **Structured Key-Value Payloads**: Groups related fields—such as buyer details, item lists, and fees—into a single data structure for easy transfer or inspection.
* **Iterating Nested Entries (`for...in` & Destructuring)**: Loops over keys or indexed properties inside a nested structure and extracts tuple values like `[itemName, itemCost]` directly.
* **Arrays of Objects**: Combines ordered lists (`[...]`) with structured records (`{...}`) and accesses specific items by index (`list[0]`).
* **Serialization & Parsing (`JSON.stringify` / `JSON.parse`)**: Converts structured data into a JSON string for sharing or storage (`JSON.stringify`) and restores it into runtime objects (`JSON.parse`).
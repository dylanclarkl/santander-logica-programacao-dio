# 📝 Class 03: What Are Classes and Objects

## 📌 Main Concepts
A **class** acts as a reusable blueprint (or template) that defines the structure, attributes, and actions of a specific type of entity. An **object** (or instance) is a concrete entity created from that class, holding its own independent property values while sharing the class's methods.

---

## 🛠️ Core Fundamentals

* **Class Blueprint (`class ClassName {}`)**: Declares a reusable template using PascalCase naming by convention (e.g., `Hero`, `Weapon`, `GuildMember`).
* **Constructor Method (`constructor(...)`)**: A special method executed automatically when `new ClassName(...)` is called, initializing the instance's properties via `this`.
* **Instantiation (`new`)**: The `new` keyword allocates a fresh object instance from the class blueprint with its own state.
* **Instance Methods**: Functions defined inside the class body (without the `function` keyword) that read or modify the instance's attributes using `this`.
# 🏋️ Extra Practice Exercises — Variables and Data Types

This section contains 10 practical drills developed in **JavaScript** (`variables-exercises.js`) to reinforce variable declarations, constants, data types, and basic arithmetic operations within a gaming context.

---

## 📋 Exercise Breakdown

* **Ex 01: Hero Base Attributes (Strings & Numbers)**
  * **Objective:** Create variables to store a hero's name, class, level, and health points (HP).
  * **Description:** Declares text variables (`String`) for name/class and numeric variables (`Number`) for level/HP, logging the full character status to the console.

* **Ex 02: In-game Currency System (`const` vs `let`)**
  * **Objective:** Use `const` for fixed currency names and `let` for dynamic coin balances.
  * **Description:** Defines an unchangeable currency type (`Gold Coins`) and updates the player's coin balance after earning rewards.

* **Ex 03: Connection and Account Status (Booleans)**
  * **Objective:** Create boolean variables (`true`/`false`) to track connection and VIP status.
  * **Description:** Uses logical data types to verify and display whether the player is currently online and holds VIP privileges.

* **Ex 04: Experience Points Tracking & Leveling Math**
  * **Objective:** Simulate experience point (XP) accumulation and calculate remaining XP needed to level up.
  * **Description:** Subtracts current XP from a fixed level-up goal constant to display how many points the hero still needs.

* **Ex 05: Audio Settings (Float / Decimal Numbers)**
  * **Objective:** Store game audio volume levels using decimal numbers.
  * **Description:** Uses floating-point numbers (`0.8`, `0.5`) to represent master and sound effects volumes, converting them into percentages for console output.

* **Ex 06: Server Info String Concatenation**
  * **Objective:** Combine static text strings with dynamic variables to build a server status message.
  * **Description:** Concatenates a fixed server region constant with an active player count variable to display server telemetry.

* **Ex 07: Potion Inventory Management**
  * **Objective:** Track and update a warrior's healing potion stock.
  * **Description:** Decrements the total count of health potions after one is consumed, displaying the updated inventory and healing power.

* **Ex 08: Player Map Coordinates (X and Y Floats)**
  * **Objective:** Store a character's real-time position on a 2D map.
  * **Description:** Uses decimal numbers for X and Y coordinates alongside a map name constant to log the player's exact location.

* **Ex 09: Guild Membership (`null` Data Type)**
  * **Objective:** Demonstrate how to represent an unassigned or empty value in a game profile.
  * **Description:** Initializes a player's guild variable with `null` to indicate the character has not joined a clan yet.

* **Ex 10: Critical Hit Damage Calculation**
  * **Objective:** Calculate final attack damage by applying a critical hit multiplier.
  * **Description:** Multiplies a hero's base attack damage by a critical factor to compute and log the total critical strike damage.
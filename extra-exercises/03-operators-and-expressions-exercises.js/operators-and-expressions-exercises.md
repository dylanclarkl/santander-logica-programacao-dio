# 🏋️ Extra Practice Exercises — Operators and Expressions

This section contains 10 practical drills developed in **JavaScript** (`exe021` to `exe030`) to reinforce arithmetic expressions, string concatenation, operator precedence, increment/decrement operations, and relational checks within a gaming context.

---

## 📋 Exercise Breakdown (`exe021` to `exe030`)

* **Ex 021 (`exe021_total_weapon_damage.js`): Total Weapon Damage**
  * **Objective:** Calculate the total damage output of a character's weapon.
  * **Description:** Adds a base weapon damage value to a strength bonus, storing and displaying the final result in `totalDamage`.

* **Ex 022 (`exe022_player_info_concatenation.js`): Player Info String Concatenation**
  * **Objective:** Combine static text with a dynamic character name variable.
  * **Description:** Uses the `+` operator to concatenate `"Player: "` with `heroName` (`"Arthas"`) and logs the formatted string.

* **Ex 023 (`exe023_gold_split_modulus.js`): Gold Split Remainder (Modulus)**
  * **Objective:** Calculate leftover coins after distributing loot evenly among party members.
  * **Description:** Uses the modulus operator (`%`) to find the remainder of dividing 25 gold coins among 4 players.

* **Ex 024 (`exe024_character_level_up.js`): Character Level Up (`++`)**
  * **Objective:** Increase a character's level by 1 upon gaining enough experience.
  * **Description:** Initializes `playerLevel` at 10 and applies the increment operator (`++`) to update the level.

* **Ex 025 (`exe025_xp_compound_assignment.js`): Experience Points Accumulation (`+=`)**
  * **Objective:** Update a player's current experience points after completing an objective.
  * **Description:** Uses the compound addition assignment operator (`+=`) to add 150 XP to an initialized `currentXp` variable.

* **Ex 026 (`exe026_knocked_out_status.js`): Knocked Out Status Check**
  * **Objective:** Determine whether a character has been defeated in combat.
  * **Description:** Evaluates a strict equality expression (`currentHp === 0`) and stores the boolean outcome in `isKnockedOut`.

* **Ex 027 (`exe027_operator_precedence.js`): Operator Precedence Evaluation**
  * **Objective:** Demonstrate how JavaScript prioritizes multiplication over addition.
  * **Description:** Evaluates `10 + 5 * 2` and documents why multiplication executes first, yielding `20`.

* **Ex 028 (`exe028_forced_parentheses_precedence.js`): Forced Precedence with Parentheses**
  * **Objective:** Override default operator precedence using parentheses.
  * **Description:** Groups an addition operation inside parentheses `(5 + 3) * 4` so it executes before multiplication, storing the result in `finalScore`.

* **Ex 029 (`exe029_stamina_evasion_decrement.js`): Stamina Reduction on Evasion (`--`)**
  * **Objective:** Decrease a character's stamina after performing a dodge maneuver.
  * **Description:** Initializes `stamina` at 100 and applies the decrement operator (`--`) to reduce it by 1.

* **Ex 030 (`exe030_dynamic_gold_output.js`): Dynamic Gold Balance Output**
  * **Objective:** Format a real-time currency readout combining text and numeric data.
  * **Description:** Concatenates `"Current Gold: "` with a numeric variable holding `500` to display the player's current balance.
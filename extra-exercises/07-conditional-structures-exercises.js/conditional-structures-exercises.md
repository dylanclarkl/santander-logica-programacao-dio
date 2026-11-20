# 🏋️ Extra Practice Exercises — Conditional Structures (`if`, `else if`, `else`)

This section contains 10 practical drills developed in **JavaScript** (`exe061` to `exe070`) to reinforce conditional branching, threshold evaluations, and boolean decision-making within an RPG context.

---

## 📋 Exercise Breakdown (`exe061` to `exe070`)

* **Ex 061 (`exe061_health_potion_check.js`): Health Potion Check**
  * **Objective:** Check if a hero's health is below 30% to trigger a health potion warning.
  * **Description:** Calculates the current HP ratio and evaluates `heroHpRatio < 0.30` using an `if / else` block.

* **Ex 062 (`exe062_quest_reward_multiplier.js`): Quest Reward Tier**
  * **Objective:** Determine bonus gold multipliers based on completed difficulty tiers (`Easy`, `Medium`, `Hard`).
  * **Description:** Uses an `if...else if...else` chain to assign reward multipliers (`1x`, `1.5x`, `2x`).

* **Ex 063 (`exe063_inventory_weight_status.js`): Inventory Encumbrance Warning**
  * **Objective:** Check if player weight exceeds maximum carrying capacity limits.
  * **Description:** Compares `currentWeight` against `maxCapacity` to log normal status or over-encumbered penalties.

* **Ex 064 (`exe064_lockpicking_success.js`): Chest Lockpicking Attempt**
  * **Objective:** Evaluate lockpicking success based on player agility and lock difficulty.
  * **Description:** Combines relational checks (`>=`) and logical AND (`&&`) across difficulty tiers.

* **Ex 065 (`exe065_elemental_weakness_bonus.js`): Elemental Damage Multiplier**
  * **Objective:** Apply damage bonuses when hitting an enemy's elemental weakness.
  * **Description:** Compares `spellElement === enemyWeakness` to apply a `2x` critical elemental multiplier.

* **Ex 066 (`exe066_party_ready_check.js`): Raid Party Ready Check**
  * **Objective:** Verify if all party members are online and ready before entering a dungeon.
  * **Description:** Evaluates multiple boolean flags using logical AND (`&&`) inside an `if / else` structure.

* **Ex 067 (`exe067_stamina_regeneration.js`): Resting Stamina Recovery**
  * **Objective:** Restore stamina points depending on whether the character is resting at a campfire or standing.
  * **Description:** Uses conditional statements to apply different compound addition (`+=`) recovery rates.

* **Ex 068 (`exe068_merchant_bargain.js`): Merchant Reputation Discount**
  * **Objective:** Calculate item purchase discounts based on player reputation points.
  * **Description:** Evaluates reputation thresholds from highest to lowest (`Revered`, `Honored`, `Friendly`) to apply discounts accurately.

* **Ex 069 (`exe069_critical_hit_determination.js`): Critical Hit Roll Evaluation**
  * **Objective:** Determine if an attack roll results in a critical hit based on critical rate.
  * **Description:** Checks if an attack roll falls within `criticalRate` to double base attack damage.

* **Ex 070 (`exe070_character_alignment.js`): Moral Alignment Classification**
  * **Objective:** Classify a character's alignment (`Hero`, `Neutral`, `Villain`) based on karma points.
  * **Description:** Uses an `if...else if...else` structure across positive, neutral, and negative karma ranges.
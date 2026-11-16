# 🏋️ Extra Practice Exercises — Comparison Operators

This section contains 10 practical drills developed in **JavaScript** (`exe041` to `exe050`) to reinforce relational and comparison operators (such as greater than, less than, strict equality, and inequality) within a gaming context.

---

## 📋 Exercise Breakdown (`exe041` to `exe050`)

* **Ex 041 (`exe041_raid_level_requirement.js`): Raid Level Requirement Check**
  * **Objective:** Check if a character's level meets the minimum requirement to enter a raid.
  * **Description:** Uses the greater than or equal to operator (`>=`) to evaluate `playerLevel` against `minLevel`.

* **Ex 042 (`exe042_item_strict_equality.js`): Item Strict Equality Comparison**
  * **Objective:** Compare two weapon strings to verify if they are identical.
  * **Description:** Uses strict equality (`===`) to compare `equippedItem` and `targetItem`.

* **Ex 043 (`exe043_server_region_inequality.js`): Server Region Strict Inequality**
  * **Objective:** Verify if a user's server region differs from the required maintenance region.
  * **Description:** Uses strict inequality (`!==`) to compare geographic regions.

* **Ex 044 (`exe044_gold_vs_item_price.js`): Gold Affordability Comparison**
  * **Objective:** Check if a player's current gold is less than the price of a legendary item.
  * **Description:** Uses the less than operator (`<`) to evaluate purchasing power.

* **Ex 045 (`exe045_inventory_weight_limit.js`): Inventory Weight Limit Check**
  * **Objective:** Verify if an inventory's weight is within the safe carrying capacity limit.
  * **Description:** Uses less than or equal to (`<=`) to ensure safe weight management.

* **Ex 046 (`exe046_leaderboard_score_match.js`): Leaderboard High Score Match**
  * **Objective:** Check if a player's high score exactly matches the global leaderboard target.
  * **Description:** Uses strict equality (`===`) to compare numeric rankings.

* **Ex 047 (`exe047_class_inequality_check.js`): Character Class Inequality**
  * **Objective:** Verify if a selected character class is different from a specific role.
  * **Description:** Uses inequality (`!=`) to validate role differentiation.

* **Ex 048 (`exe048_enemy_health_continuity.js`): Enemy Health Continuity Check**
  * **Objective:** Determine if an enemy still has health remaining to keep combat active.
  * **Description:** Uses greater than (`>`) to check if `enemyHealth` is above zero.

* **Ex 049 (`exe049_banned_account_id_check.js`): Banned Account ID Validation**
  * **Objective:** Check if a user's account ID does not match a banned record.
  * **Description:** Uses strict inequality (`!==`) with string IDs to prevent unauthorized access.

* **Ex 050 (`exe050_loose_vs_strict_equality.js`): Loose vs Strict Equality Comparison**
  * **Objective:** Compare an age value stored as a string with a number using both `==` and `===`.
  * **Description:** Demonstrates type coercion differences between loose and strict equality operators.
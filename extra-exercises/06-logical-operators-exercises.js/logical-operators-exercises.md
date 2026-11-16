# 🏋️ Extra Practice Exercises — Logical Operators

This section contains 10 practical drills developed in **JavaScript** (`exe051` to `exe060`) to reinforce logical operators (AND `&&`, OR `||`, and NOT `!`) combined with comparison rules within a gaming context.

---

## 📋 Exercise Breakdown (`exe051` to `exe060`)

* **Ex 051 (`exe051_sanctuary_entry_check.js`): Sanctuary Entry Requirements**
  * **Objective:** Check if a character meets level and item prerequisites to enter a sanctuary.
  * **Description:** Uses the logical AND operator (`&&`) to evaluate level and pass ownership.

* **Ex 052 (`exe052_vip_promo_discount_check.js`): VIP or Promo Code Discount**
  * **Objective:** Verify if a player qualifies for a store discount through membership or promo codes.
  * **Description:** Uses the logical OR operator (`||`) to check alternative discount conditions.

* **Ex 053 (`exe053_banned_access_denied_check.js`): Banned Account Access Status**
  * **Objective:** Determine if game access is denied due to an account ban.
  * **Description:** Evaluates account ban status directly using boolean values.

* **Ex 054 (`exe054_secret_achievement_unlock.js`): Secret Achievement Unlock**
  * **Objective:** Check multiple criteria required to unlock a hidden achievement.
  * **Description:** Combines score checks, key possession, and tutorial completion using multiple `&&` operators.

* **Ex 055 (`exe055_weather_exploration_check.js`): Weather Exploration Conditions**
  * **Objective:** Determine if a character can explore outside based on weather or items.
  * **Description:** Uses logical OR (`||`) and inequality (`!==`) to evaluate storm safety and umbrella carriage.

* **Ex 056 (`exe056_boss_trap_activation.js`): Boss Trap Activation Check**
  * **Objective:** Check if a boss trap triggers when a pressure plate is stepped on and cooldown is ready.
  * **Description:** Uses logical AND (`&&`) to combine plate triggers and cooldown states.

* **Ex 057 (`exe057_email_trade_restriction.js`): Account Trade Restriction Check**
  * **Objective:** Check if a player is restricted from trading because their email is unverified.
  * **Description:** Uses the logical NOT operator (`!`) to invert the email verification status.

* **Ex 058 (`exe058_heavy_armor_equipment_check.js`): Heavy Armor Equipment Validation**
  * **Objective:** Verify if a character meets strength and class requirements to equip heavy armor.
  * **Description:** Combines relational checks (`>=` and `===`) with the logical AND operator (`&&`).

* **Ex 059 (`exe059_daily_reward_claim_check.js`): Daily Reward Eligibility**
  * **Objective:** Check if a player can claim a daily reward via streak days or cash shop purchases.
  * **Description:** Uses the logical OR operator (`||`) to evaluate alternative eligibility rules.

* **Ex 060 (`exe060_server_login_maintenance_block.js`): Server Maintenance Login Block**
  * **Objective:** Create a complex condition wrapped in parentheses and negated with `!` to block login during maintenance unless admin.
  * **Description:** Combines comparison and logical rules inside a negated grouping to control server access.
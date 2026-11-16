// Exercise 052: VIP or Promo Code Discount
// Objective: Check if a player qualifies for a discount using '||'

let isVip = true;
let hasPromoCode = true;

// At least one condition must be true to receive a discount
let qualifiesForDiscount = (isVip === true) || (hasPromoCode === true);

console.log("Does the player qualify for a discount? " + qualifiesForDiscount); // true
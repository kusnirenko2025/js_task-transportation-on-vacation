/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceOneDay = 40;
  const longTerm = 7;
  const longTermDiscount = 50;
  const shortTetm = 3;
  const shortTermDiscount = 20;

  const basePrice = days * priceOneDay;

  if (days >= longTerm) {
    return basePrice - longTermDiscount;
  }

  if (days >= shortTetm) {
    return basePrice - shortTermDiscount;
  }

  return basePrice;
}

module.exports = calculateRentalCost;

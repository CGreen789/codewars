// Takes in a number of days and multiply by 40
// If 0 - 2, no discount
// If 3 - 6, 20 off
// Everything else, 50 off

function rentalCarCost(d) {
  let totalCost = d * 40;
  if (d < 3) {
    return totalCost;
  }
  if (d >= 3 && d < 7) {
    return totalCost - 20;
  } else {
    return totalCost - 50;
  }
}

function candiesToBuy(kids) {
  let total = 1;
  let last = total;
  for (let i = kids; i > 1; i--) {
    while (total % i !== 0) {
      total += last;
    }
    last = total;
  }
  return total;
}
const makeChange = (amount) => {
  const change = {};
  if (amount === 0) return change;
  let remain = parseInt(amount);
  if (remain / 50 >= 1) {
    change['H'] = Math.floor(remain / 50);
    remain %= 50;
  }
  if (remain / 25 >= 1) {
    change['Q'] = Math.floor(remain / 25);
    remain %= 25;
  }
  if (remain / 10 >= 1) {
    change['D'] = Math.floor(remain / 10);
    remain %= 10;
  }
  if (remain / 5 >= 1) {
    change['N'] = Math.floor(remain / 5);
    remain %= 5;
  }
  if (remain >= 1) {
    change['P'] = remain;
  }
  return change;
};
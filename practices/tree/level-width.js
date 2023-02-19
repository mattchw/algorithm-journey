function levelWidth(root) {
  const arr = [root, false];
  const counters = [0];
  while (arr.length > 1) {
    const node = arr.shift();
    if (node === false) {
      counters.push(0);
      arr.push(false);
    } else {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }
  return counters;
}
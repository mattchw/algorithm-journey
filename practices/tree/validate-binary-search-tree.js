function validate(root, min = null, max = null) {
  if (max !== null && root.data >= max) {
    return false;
  }
  if (min !== null && root.data <= min) {
    return false;
  }
  if (root.left && !validate(root.left, min, root.data)) {
    return false;
  }
  if (root.right && !validate(root.right, root.data, max)) {
    return false;
  }
  return true;
}
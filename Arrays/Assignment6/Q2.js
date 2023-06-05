var searchMatrix = function(matrix, target) {
    const m = matrix.length;
  const n = matrix[0].length;

  let l = 0;
  let r = m * n - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const num = matrix[Math.floor(mid / n)][mid % n];

    if (num === target) {
      return true;
    } else if (num < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return false;
};
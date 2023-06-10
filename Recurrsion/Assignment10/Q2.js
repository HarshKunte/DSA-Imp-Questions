function lastRemaining(n) {
    const arr = Array.from({ length: n }, (_, index) => index + 1);
    return findLastRemaining(arr, true);
  }
  
  function findLastRemaining(arr, leftToRight) {
    if (arr.length === 1) {
      return arr[0];
    }
  
    if (leftToRight) {
      const remaining = [];
      for (let i = 1; i < arr.length; i += 2) {
        remaining.push(arr[i]);
      }
      return findLastRemaining(remaining, false);
    } else {
      const remaining = [];
      for (let i = arr.length - 2; i >= 0; i -= 2) {
        remaining.unshift(arr[i]);
      }
      return findLastRemaining(remaining, true);
    }
  }
function mySqrt(x) {
    if (x === 0) {
      return 0;
    }
  
    let l = 1;
    let r = Math.floor(x / 2) + 1;
  
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      const square = mid * mid;
  
      if (square === x) {
        return mid;
      } else if (square < x) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  
    return r;
  }
  
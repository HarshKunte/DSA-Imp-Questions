function maxCount(m, n, ops) {
    let minX = m;
    let minY = n;
  
    for (const [x, y] of ops) {
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
    }
  
    return minX * minY;
  }
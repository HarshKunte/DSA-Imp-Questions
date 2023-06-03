function arrangeCoins(n) {
    let rows = 0;
    let coins = n;
  
    for (let i = 1; coins >= i; i++) {
      coins -= i;
      rows++;
    }
  
    return rows;
  }
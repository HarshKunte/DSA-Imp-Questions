var  distributeCandies = function(candyType) {
    const max = candyType.length / 2;
    const unique = new Set(candyType);
  
    return Math.min(unique.size, max);
  }
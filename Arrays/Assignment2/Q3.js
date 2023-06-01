var findLHS = function(nums) {
    const freq = new Map();
    let length = 0;
  
    for (const num of nums) {
      if (freq.has(num)) {
        freq.set(num, freq.get(num) + 1);
      } else {
        freq.set(num, 1);
      }
    }
  
    for (const num of nums) {
      if (freq.has(num + 1)) {
        const subLength = freq.get(num) + freq.get(num + 1);
        length = Math.max(length, subLength);
      }
    }
  
    return length;
  }
  
  
function isStrobogrammatic(num) {
    const strMap = {
      '0': '0',
      '1': '1',
      '6': '9',
      '8': '8',
      '9': '6'
    };
  
    let l = 0;
    let r = num.length - 1;
  
    while (l <= r) {
      if (!(num[l] in strMap) ||
          strMap[num[l]] !== num[r]) {
        return false;
      }
  
      l++;
      r--;
    }
  
    return true;
  }
  
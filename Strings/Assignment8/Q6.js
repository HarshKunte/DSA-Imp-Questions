function findAnagrams(s, p) {
    const result = [];
    const pFreq = new Array(26).fill(0); 
    const sFreq = new Array(26).fill(0); 
  
    for (let i = 0; i < p.length; i++) {
      const index = p.charCodeAt(i) - 97; // Convert character to index (a: 0, b: 1, ..., z: 25)
      pFreq[index]++;
    }
  
    let left = 0; 
    let right = 0;
  
    while (right < s.length) {
      const char = s.charCodeAt(right) - 97; 
   
      sFreq[char]++;
  
      if (right - left + 1 > p.length) {
        const leftChar = s.charCodeAt(left) - 97;
        sFreq[leftChar]--;
        left++;
      }

      if (right - left + 1 === p.length && arraysMatch(pFreq, sFreq)) {
        result.push(left);
      }
  
      right++;
    }
  
    return result;
  }
  
  function arraysMatch(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
  
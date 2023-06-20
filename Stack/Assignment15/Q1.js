function nextGreaterElement(nums1, nums2) {
    const map = new Map();
    const stack = [];
    const result = [];
  
    for (let num of nums2) {
      while (stack.length > 0 && num > stack[stack.length - 1]) {
        const prevNum = stack.pop();
        map.set(prevNum, num);
      }
      stack.push(num);
    }
  
    for (let num of nums1) {
      const nextGreater = map.get(num);
      result.push(nextGreater !== undefined ? nextGreater : -1);
    }
  
    return result;
  }
  
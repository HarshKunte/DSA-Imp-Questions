function nextSmallerElement(nums) {
    const stack = [];
    const result = [];
    const map = new Map;
    let j =nums.length-1
    while(j>=0) {
      while (stack.length > 0 && nums[j] < stack[stack.length - 1].val) {
        let prev = stack.pop();
        map.set(prev.index, nums[j]);
      }
      stack.push({index:j, val:nums[j]});
      j--;
    }
  
    for (let i=0;i<nums.length;i++) {
      const nextGreater = map.get(i);
      result.push(nextGreater !== undefined ? nextGreater : -1);
    }
  
    return result;
  }
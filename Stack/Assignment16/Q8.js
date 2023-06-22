function absDiff(nums) {
    const stack = [];
    const result = [];
    const leftSmaller = new Array(nums.length).fill(0);
    const rightSmaller = new Array(nums.length).fill(0)
    let j =nums.length-1
    while(j>=0) {
      while (stack.length > 0 && nums[j] < nums[stack[stack.length - 1]]) {
        let prev = stack.pop();
        leftSmaller[prev] = nums[j]
      }
      if(stack.length>0 && nums[j]>nums[stack[stack.length-1]])
      rightSmaller[j] = nums[stack[stack.length-1]];
      
      if(stack.length>0 && nums[j]===nums[stack.length-1]){
          rightSmaller[j] = rightSmaller[stack[stack.length-1]];
          leftSmaller[j] = leftSmaller[stack[stack.length-1]];
      }
      
      stack.push(j);
      j--;
    }
  
  let max = Math.abs(leftSmaller[0]-rightSmaller[0])
    for(let i=1; i<leftSmaller.length; i++){
        max = Math.max(max, Math.abs(leftSmaller[i]-rightSmaller[i]))
    }
  
    return max;
  }
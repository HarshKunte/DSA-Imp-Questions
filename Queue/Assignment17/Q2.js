function maxSubarraySumCircular(nums) {
    let maxSum = -Infinity;
    let currentMax = 0;
  
    for (let i = 0; i < nums.length; i++) {
      currentMax = Math.max(nums[i], currentMax + nums[i]);
      maxSum = Math.max(maxSum, currentMax);
    }
  
    let totalSum = 0;
    let currentMin = 0;
    let minSum = Infinity;
  
    for (let i = 0; i < nums.length; i++) {
      totalSum += nums[i];
      currentMin = Math.min(nums[i], currentMin + nums[i]);
      minSum = Math.min(minSum, currentMin);
    }
  
    if (minSum === totalSum) {
      return maxSum;
    }
  
    return Math.max(maxSum, totalSum - minSum);
  }
  
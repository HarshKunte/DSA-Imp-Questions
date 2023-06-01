var smallestRangeI = function(nums, k) {
    const n = nums.length;
  nums.sort((a, b) => a-b);

  let minScore = nums[n-1]-nums[0];

  for (let i=1; i < n; i++) {
    const low=Math.min(nums[0]+k, nums[i]-k);
    const high=Math.max(nums[n-1]-k, nums[i-1]+k);
    minScore=Math.min(minScore, high-low);
  }

  return minScore;
};
var maximumProduct = function(nums) {
    nums.sort((a, b) => a - b);

  const n = nums.length;
  const p1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
  const p2 = nums[0] * nums[1] * nums[n - 1];

  return Math.max(p1, p2);
};
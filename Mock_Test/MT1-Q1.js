var moveZeroes = function(nums) {
    let i = 0, j = i + 1;
  
    if (nums.length === 1) return nums;
  
    while (j < nums.length) {
      if (nums[i] === 0 && nums[j] !== 0) {
        [nums[i], nums[j]] = [nums[j], nums[i]]; // Swap elements using destructuring assignment
  
        i++;
        j++;
      } else {
        i++;
        j++;
      }
    }
  
    return nums;
  };
  
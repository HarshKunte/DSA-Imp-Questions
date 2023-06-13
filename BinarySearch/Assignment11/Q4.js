var findDuplicate = function(nums) {
    let left = 1;
  let right = nums.length - 1;
  console.log(left, right)
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    let count = 0;

    // Count the number of elements in the array that are less than or equal to mid
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= mid) {
        count++;
      }
    }

    // If the count is greater than mid, the repeated number is in the left half
    if (count > mid) {
      right = mid;
    } else {
      // Otherwise, it is in the right half
      left = mid + 1;
    }
  }

  return left;
};
function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        return true;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return false;
  }
  
  function intersection(nums1, nums2) {
    nums1.sort((a, b) => a - b); 
  
    const result = [];
  
    for (let num of nums2) {
      if (binarySearch(nums1, num)) {
        result.push(num);
      }
    }
  
    return Array.from(new Set(result)); 
  }
  
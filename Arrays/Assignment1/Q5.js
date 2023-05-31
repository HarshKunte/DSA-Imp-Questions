// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
//  and two integers m and n, representing the number of elements in nums1 and nums2 respectively
function merge(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
  
    while (i >= 0 && j >= 0) {
      if (nums1[i] > nums2[j]) {
        nums1[k] = nums1[i];
        i--;
      } else {
        nums1[k] = nums2[j];
        j--;
      }
      k--;
    }
  
    while (j >= 0) {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }
  
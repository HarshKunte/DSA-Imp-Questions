var threeSumClosest = function(nums, target) {
    
    nums.sort((a, b) => a - b); 
 let minSum = Infinity; 

 for (let i = 0; i < nums.length - 2; i++) {
   let l = i + 1; 
   let r = nums.length - 1; 

   while (l < r) {
     const sum = nums[i] + nums[l] + nums[r];

     if (sum === target) {
       return sum; 
     }

     if (Math.abs(sum - target) < Math.abs(minSum - target)) {
       minSum = sum; 
     }

     if (sum < target) {
       l++; 
     } else {
       r--; 
     }
   }
 }

 return minSum;
};
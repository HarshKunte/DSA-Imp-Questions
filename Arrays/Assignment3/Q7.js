var summaryRanges = function(nums) {
    const res = [];
 let start = nums[0];

 for (let i = 0; i < nums.length; i++) {
   if (i + 1 < nums.length && nums[i] + 1 === nums[i + 1]) {
     continue; // Extend the range
   }

   const end = nums[i];
   res.push(getRangeString(start, end));
   start = nums[i + 1];
 }

 return res;
}

function getRangeString(start, end) {
 return start === end ? start.toString() : `${start}->${end}`;
}
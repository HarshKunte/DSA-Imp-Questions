// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.
var moveZeroes = function(nums) {
    let i=0, j=i+1
    if(nums.length==1) return nums;
    
    while(j<nums.length){
        if(nums[i]===0 && nums[j]!=0){
            let temp = nums[i];
            nums[i] = nums[j]
            nums[j] = temp

            i++;
            j++;
        }
        else if(nums[i]===0 && nums[j]===0){
            j++;
        }
        else{
            i++;
            j++;
        }
    }
    return nums
};
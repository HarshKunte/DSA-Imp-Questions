var sortColors = function(nums) {
    let l = 0,i=0; r = nums.length-1; m=r-1;

    while(i<=r){
        if(nums[i]===0){
            [nums[i], nums[l]] = [nums[l], nums[i]];
            l++;
            i++;
        }
        else if(nums[i]===2){
            [nums[i], nums[r]] = [nums[r], nums[i]];
            r--;
        }
        else{
            i++;
        }
    }
};
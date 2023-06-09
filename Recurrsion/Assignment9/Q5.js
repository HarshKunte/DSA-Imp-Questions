function calcMax(nums){
    return recCalcMax(nums, nums.length)
}
function recCalcMax(nums, n){
    if(n==1) return nums[0]
    
    return Math.max(nums[n-1], recCalcMax(nums, n-1))
}
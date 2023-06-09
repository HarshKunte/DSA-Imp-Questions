function calcProd(nums){
    return recCalcProd(nums, nums.length)
}
function recCalcProd(nums, n){
    if(n==1) return nums[0]
    
    return nums[n-1] * recCalcProd(nums, n-1)
}
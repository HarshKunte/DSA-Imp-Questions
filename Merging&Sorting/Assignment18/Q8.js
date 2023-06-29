var find132pattern = function(nums) {
    let stack = [];
    let kElement = Number.NEGATIVE_INFINITY
    for(let i=nums.length-1; i>=0; i--){
        if(nums[i]< kElement) return true
        while(stack.length>0 && nums[i]>stack[stack.length-1]){
            kElement = stack[stack.length-1]
            stack.pop()
        }
        stack.push(nums[i])
    }

    return false
};
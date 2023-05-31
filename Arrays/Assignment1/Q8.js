
var findErrorNums = function(nums) {
    let map = new Map()
    for(let i=0; i<nums.length;i++){
        map.get(nums[i])?map.set(nums[i], map.get(nums[i])+1) : map.set(nums[i], 1)
    }
    let res = []
    for(let i=1;i<=nums.length;i++){
        if(!map.get(i)) res[1]=i 
        if(map.get(i)>1) res[0]=i;
    }
    return res
};
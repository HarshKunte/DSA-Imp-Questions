// You have a set of integers s, which originally contains all the numbers from 1 to n.
//  Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set,
//   which results in repetition of one number and loss of another number.
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
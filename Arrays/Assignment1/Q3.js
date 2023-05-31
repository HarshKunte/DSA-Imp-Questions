// Given a sorted array of distinct integers and a target value, 
// return the index if the target is found. If not, return the index where it would be if it were inserted in order.
var searchInsert = function(nums, target) {
    
    return binarySearch(0, nums.length-1, nums, target)


};
function binarySearch(left, right, nums, target){
    if(left>right){
        return left
    }
    let mid = (Math.floor((right -left)/2)) +left
    if(nums[mid]>target){
        return binarySearch(left, mid-1, nums, target)
    }
    else if(nums[mid]<target){
        return binarySearch(mid+1, right, nums, target)
    }
    else if(nums[mid]==target){
        return mid
    }
}

// Given an integer array nums and an integer val, 
// remove all occurrences of val in nums in-place. 
// The order of the elements may be changed. Then return the number of elements in nums which are not equal to val

var removeElement = function(nums, val) {
    let i = 0;
   let j = nums.length-1
   let c = 0;

   if(nums.length==1 && nums[0]!=val) return 1;
   if(nums.length==1 && nums[0]==val) return 0;
   while(i<=j){
       if(nums[i]==val && nums[j]!=val){

           //swap elements at i and j
           let temp = nums[i];
           nums[i]=nums[j];
           nums[j]=temp
           i++;
           j--;
           c++
       }
       else if(nums[i]!=val && nums[j]!=val){
           i++;
           c++;
       }
       else if(nums[i]==val && nums[j]==val){
           j--;
       }
       else{
           i++;
           j--;
           c++
       }

       
   }
   return c
};
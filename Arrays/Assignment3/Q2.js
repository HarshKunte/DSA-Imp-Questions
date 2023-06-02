var fourSum = function(nums, target) {
    
    nums.sort((a,b)=>a-b)
    
    let res = [];
    for(let i=0;i<nums.length-3;i++){
         if (i > 0 && nums[i] === nums[i - 1]) {
      continue; 
    }
        let l = i+1;
        
        while(l<nums.length-2){
            let r = nums.length-1
            if (l > i+1 && nums[l] === nums[l - 1]) {
                l++;
                continue; 
            }
            let j =  l+1;
            
            while(j<r){
                if (j > l+1 && nums[j] === nums[j - 1]) {
                    j++
                    continue; 
                 }
                const sum = nums[i]+nums[l]+nums[j]+nums[r];
                
            if(sum == target) {
                res.push([nums[i],nums[l],nums[j],nums[r]])
                j++;
                while (j < r && nums[j] === nums[j - 1]) {
            j++; 
          }

            }
            else if(sum<target){
                j++;
            }
            else if(sum>target){
                r--;
            }
            }
            l++;            
        }
    }
    return res
};
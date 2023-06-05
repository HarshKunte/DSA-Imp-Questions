var findOriginalArray = function(changed) {
    if (changed.length % 2 !== 0) {
       return [];
     }
   
     const original = [];
     const countMap = new Map();
   
     for (const num of changed) {
       countMap.set(num, (countMap.get(num) || 0) + 1);
     }
   
     changed.sort((a, b) => a - b);

     for (const num of changed) {
       if (countMap.get(num) === 0) {
         continue;
       }
   
       const doubledNum = num * 2;
   
       if (countMap.get(doubledNum) && countMap.get(doubledNum) > 0) {
         original.push(num);
         countMap.set(num, countMap.get(num) - 1);
         countMap.set(doubledNum, countMap.get(doubledNum) - 1);
       } else {
         return [];
       }
     }
   
     return original;
   };
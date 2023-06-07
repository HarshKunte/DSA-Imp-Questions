var rotateString = function(s, goal) {
    if (s.length !== goal.length) {
   return false;
 }

 const concatenated = s + s;
 const goalLength = goal.length;

 for (let i = 0; i < concatenated.length; i++) {
   let j = 0;
   while (j < goalLength && concatenated[i + j] === goal[j]) {
     j++;
   }
   if (j === goalLength) {
     return true;
   }
 }

 return false;
};
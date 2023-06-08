var buddyStrings = function(s, goal) {
    if (s.length !== goal.length) {
   return false;
 }
   if (s === goal) {
   const set = new Set(s);
   return set.size < s.length;
 }

 const diffIndices = [];

 for (let i = 0; i < s.length; i++) {
   if (s.charAt(i) !== goal.charAt(i)) {
     diffIndices.push(i);
   }

   if (diffIndices.length > 2) {
     return false;
   }
 }

 return (
   diffIndices.length === 2 &&
   s.charAt(diffIndices[0]) === goal.charAt(diffIndices[1]) &&
   s.charAt(diffIndices[1]) === goal.charAt(diffIndices[0])
 )
};
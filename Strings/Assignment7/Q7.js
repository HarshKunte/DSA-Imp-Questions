var backspaceCompare = function(s, t) {
    const stack1 = [];
    const stack2 = [];

 for (let char of s) {
   if (char === '#') {
     stack1.pop();
   } else {
     stack1.push(char);
   }
 }
 for (let char of t) {
   if (char === '#') {
     stack2.pop();
   } else {
     stack2.push(char);
   }
 }

 return stack1.join('')===stack2.join('');
}
var compress = function(chars) {
    let currentIndex = 0; 
 let currentChar = chars[0]; 
 let count = 0; 

 for (let i = 0; i <= chars.length; i++) {
   if (chars[i] === currentChar) {
     count++;
   } else {
     chars[currentIndex] = currentChar;
     currentIndex++;

     if (count > 1) {
       const countString = count.toString();
       for (let j = 0; j < countString.length; j++) {
         chars[currentIndex] = countString.charAt(j);
         currentIndex++;
       }
     }

     if (i < chars.length) {
       currentChar = chars[i];
       count = 1;
     }
   }
 }

 return currentIndex;
};
var reverseWords = function(s) {
    const words = s.split(" ");
   
     for (let i = 0; i < words.length; i++) {
       words[i] = reverseWord(words[i]);
     }
   
     return words.join(" ");
   }
   
   function reverseWord(word) {
     let reversed = "";
   
     for (let i = word.length - 1; i >= 0; i--) {
       reversed += word[i];
     }
   
     return reversed;
   }
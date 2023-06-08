var decodeString = function(s) {
    const stack = []; // Stack to store decoded parts
  let currentNum = 0; // Current number of repetitions
  let currentStr = ''; // Current decoded string

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    if (!isNaN(char)) {
      currentNum = currentNum * 10 + parseInt(char);
    } else if (char === '[') {
      
      stack.push(currentNum);
      stack.push(currentStr);
      currentNum = 0; 
      currentStr = ''; 
    } else if (char === ']') {
      // If the character is ']', decode the repeated string
      const prevStr = stack.pop(); 
      const prevNum = stack.pop(); 

      currentStr = prevStr + currentStr.repeat(prevNum); 
    } else {
      
      currentStr += char;
    }
  }

  return currentStr;
};
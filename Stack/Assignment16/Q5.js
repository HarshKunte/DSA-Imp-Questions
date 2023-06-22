function reverseNumber(number) {
    const stack = [];
    const numberString = number.toString();
  
    for (let digit of numberString) {
      stack.push(digit);
    }
  
    let reversedNumber = '';
  
    while (stack.length > 0) {
      reversedNumber += stack.pop();
    }
  
    return parseInt(reversedNumber);
  }
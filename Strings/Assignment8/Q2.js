var checkValidString = function(s) {
    const stack = [];
  const starStack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    if (char === '(') {
      stack.push(i);
    } else if (char === '*') {
      starStack.push(i);
    } else {
      if (stack.length > 0) {
        stack.pop();
      } else if (starStack.length > 0) {
        starStack.pop();
      } else {
        return false;
      }
    }
  }

  while (stack.length > 0 && starStack.length > 0) {
    const leftIndex = stack.pop();
    const starIndex = starStack.pop();

    if (leftIndex > starIndex) {
      return false;
    }
  }

  return stack.length === 0;
};


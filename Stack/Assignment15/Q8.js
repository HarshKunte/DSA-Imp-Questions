var trap = function(height) {
    let totalWater = 0;
  const stack = [];

  for (let current = 0; current < height.length; current++) {
    while (stack.length > 0 && height[current] > height[stack[stack.length - 1]]) {
      const top = stack.pop();

      if (stack.length === 0) {
        break;
      }

      const distance = current - stack[stack.length - 1] - 1;
      const boundedHeight = Math.min(height[current], height[stack[stack.length - 1]]) - height[top];
      totalWater += distance * boundedHeight;
    }

    stack.push(current);
  }

  return totalWater;
}
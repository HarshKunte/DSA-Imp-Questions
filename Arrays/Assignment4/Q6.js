function sortedSquares(nums) {
    const squaredNums = nums.map(num => num * num);
    squaredNums.sort((a, b) => a - b);
    return squaredNums;
  }
var singleNumber = function(nums) {
    let result = 0;

  for (let num of nums) {
    result ^= num; // XOR operation
  }

  return result;
};
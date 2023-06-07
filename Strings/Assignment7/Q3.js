var addStrings = function(num1, num2) {
    let carry = 0;
  let result = "";
  let i = num1.length - 1;
  let j = num2.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    const dig1 = i >= 0 ? parseInt(num1[i]) : 0;
    const dig2 = j >= 0 ? parseInt(num2[j]) : 0;

    const sum = dig1 + dig2 + carry;
    const digitSum = sum % 10;
    carry = Math.floor(sum / 10);

    result = digitSum + result;

    i--;
    j--;
  }

  return result;
};
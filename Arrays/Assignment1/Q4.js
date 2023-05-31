// You are given a large integer represented as an integer array digits, 
// where each digits[i] is the ith digit of the integer. 
// The digits are ordered from most significant to least significant in left-to-right order. 
// The large integer does not contain any leading 0's.


var plusOne = function(digits) {
    let i= digits.length-1;

    while(i>=0 && digits[i]+1>9){
        digits[i]=0;
        i--
    }
    if(i<0) digits.unshift(1)
    else digits[i]=digits[i]+1;

    return digits
};
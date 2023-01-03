/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let length = digits.length, carry = 0;
    if(digits[length - 1] < 9) {
        digits[length - 1]++;
    } else {
        for(let i = length - 1; i >= 0; i--) {
            if(digits[i] == 9) {
	            digits[i] = 0;
	            carry = 1;
            } else {
	            digits[i]++;
	            carry = 0;
            	break;
            }
        }
    }

    if(carry) {
        digits.unshift(carry)
        carry = 0;
    }

    return digits;
};
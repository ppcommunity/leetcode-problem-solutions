/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let numStr = num.toString();
    let arr = numStr.split('').sort();
    let num1 = Number(arr[0] + arr[3]), num2 = Number(arr[1] + arr[2])
    return num1 + num2;
};

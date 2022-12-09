/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let newArr = [];
    for(let x = 0, y = n; x < n; x++, y++) {
        newArr.push(nums[x]);
        newArr.push(nums[y]);
    }
    return newArr;
};
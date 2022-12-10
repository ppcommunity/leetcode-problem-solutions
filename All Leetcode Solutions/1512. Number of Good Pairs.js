/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
	let count = 0;
	let length = nums.length
	for(let i = 0; i < length; i++) {
	  for(let j = i + 1; j < length; j++) {
	    if(nums[i] == nums[j]) {
	      count++;
	    }
	  }
	}
	return count;
};
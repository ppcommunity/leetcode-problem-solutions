/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let wealth = []

    for(let i = 0; i < accounts.length; i++) {
        let arr = accounts[i];
        let sum = 0;
        for(let j = 0; j < arr.length; j++) {
            sum += arr[j]
        }
        wealth.push(sum)
    }

    return Math.max.apply(0, wealth);
};

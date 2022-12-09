/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let arr = [];  
    let Kelvin = celsius + 273.15
    let Fahrenheit = celsius * 1.80 + 32.00
    arr.push(Kelvin.toFixed(5))
    arr.push(Fahrenheit.toFixed(5))
    return arr;
};
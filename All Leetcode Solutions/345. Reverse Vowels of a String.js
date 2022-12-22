/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    s = s.split('');
    let s_copy = s.slice()
    let arr = [];
    for(let i = 0; i < s.length; i++) {
        if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u' || s[i] == 'A' || s[i] == 'E' || s[i] == 'I' || s[i] == 'O' || s[i] == 'U') {
            arr.push(i)
        }
    }

    for(let i = 0, j = 0; i < s.length; i++) 
    {
        if(i == arr[j]) 
        {
            s[i] = s_copy[arr[arr.length - 1 - j]];
            j++;
        }
    }
    s = s.join('');
    return s;
};
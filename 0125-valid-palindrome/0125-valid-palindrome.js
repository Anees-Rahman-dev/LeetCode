/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
let cleaned = s.replace(/[^a-z0-9]/gi,'').toLowerCase();
let reversed = s.replace(/[^a-z0-9]/gi,'').toLowerCase().split('').reverse().join('');

return cleaned == reversed
};

console.log(isPalindrome("race a car"))
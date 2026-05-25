/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let splitAndTrimmed = s.trim().split(' ');
    let newRes = splitAndTrimmed[splitAndTrimmed.length-1];
    let count = 0
    for(let i = 0; i < newRes.length; i ++){
        count ++
    }
    return count
};
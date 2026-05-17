var isAnagram = function(s, t) {
    let New_s = s.split('').sort().join([])
    let New_t = t.split('').sort().join([])
    
    return New_s === New_t
};
console.log(isAnagram("anagram","nagaram"))
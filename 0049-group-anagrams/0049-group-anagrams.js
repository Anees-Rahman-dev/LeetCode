/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let Mapped = new Map();

    for(let i = 0 ; i < strs.length ; i++){
        let key = strs[i].split('').sort().join('');

        if(!Mapped.has(key)){
            Mapped.set(key,[])
        }
        Mapped.get(key).push(strs[i])
    }
    return [...Mapped.values()]
};
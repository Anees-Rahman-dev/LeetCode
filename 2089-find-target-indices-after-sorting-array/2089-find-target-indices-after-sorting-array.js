/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let arr = [];
    let sorted = nums.sort((a,b)=> a-b);
    for(let i = 0 ; i < sorted.length ; i++){
        if(sorted[i] === target){
            arr.push(i)
        }
    }
    return arr
};

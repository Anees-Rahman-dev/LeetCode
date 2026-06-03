/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function(nums, target) {
    let arr = undefined
    for(let i = 0 ; i < nums.length ; i++) {
      if(nums[i] === target){
        return i
      }
    }
    arr = [...nums,target]
    arr.sort((a,b) => a - b)
    for(let j = 0 ; j < arr.length ; j++){
      if(arr[j] === target){
        return j
      }
    }
  
};
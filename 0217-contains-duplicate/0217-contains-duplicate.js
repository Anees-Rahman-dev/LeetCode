/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let sett = new Set();

    for(i=0; i<nums.length; i++){
        if(sett.has(nums[i])){
             return true
        }else{
            sett.add(nums[i])
        }
    }
    return false
    }
  
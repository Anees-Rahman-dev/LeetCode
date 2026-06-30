/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let arr1 = [];
    let sorted  = nums.sort((a , b) => a - b);
    for(let i = 0 ; i < nums.length ; i += 2){
        arr1.push(nums[i + 1]);
        arr1.push(nums[i])
    } 
  return arr1 

};
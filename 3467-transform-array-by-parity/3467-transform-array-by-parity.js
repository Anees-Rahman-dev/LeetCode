/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    let arr = []
    let newArray = undefined
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] % 2 == 0){
            arr.push(0)
        }else{
            arr.push(1)
        }
    }
    newArray = arr.sort()
    return newArray
};
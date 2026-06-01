/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let even = []
    let odd = []
    let newArray = undefined

    for (let i = 0 ; i < nums.length ; i++){

        if(nums == []){
            return []
        }

        if(nums[i] % 2 == 0){
            even.push(nums[i])
        }else{
            odd.push(nums[i])
        }
    }
    newArray = even.concat(odd)
    return newArray
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let digitSum = 0;
    let elementSum = 0;
    let toDigit = 0;

    for(i=0; i<nums.length; i++){
        elementSum += nums[i]
    }

    for(i=0; i<nums.length; i++){
        if(nums[i] > 9){
            toDigit = nums[i].toString().split("")

            for(j=0 ; j<toDigit.length; j++){
                digitSum += Number(toDigit[j])
            }
        }else{
            digitSum += nums[i]
        }
    }
    return elementSum - digitSum 
};
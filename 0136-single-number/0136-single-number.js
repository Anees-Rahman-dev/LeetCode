var singleNumber = function(nums) {

 const res = nums.reduce((initial,next) => {
 return initial ^ next
 },0)
 return res
    
};
console.log(singleNumber([2,2,1]))
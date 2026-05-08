/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let seen = new Set();
    let missingOne = 0;
    let duplicateOne = 0;

    for(let num of nums){
        if(seen.has(num)){
           duplicateOne = num
        }else{
            seen.add(num)
        }  
    }

    for(i=1; i<= nums.length; i++){
        if(!seen.has(i)){
            missingOne = i
        }
    }

    return [duplicateOne,missingOne]
};
console.log(findErrorNums([1,2,2,4]))
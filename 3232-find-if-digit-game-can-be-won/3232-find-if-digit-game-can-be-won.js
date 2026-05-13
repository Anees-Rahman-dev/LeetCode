 var canAliceWin = function(nums) {
   let sumOfSingleDigit = 0;
   let sumOfDoubleDigit = 0;
   
    for(let i =0; i<nums.length; i++){
      if(nums[i] < 10 ){
        sumOfSingleDigit += nums[i]
      }else{
        
      sumOfDoubleDigit += nums[i]
      }
    }
    
    if(sumOfDoubleDigit > sumOfSingleDigit ){
      return true
    }else if(sumOfSingleDigit > sumOfDoubleDigit){
      return true
    }else if(sumOfSingleDigit == sumOfDoubleDigit){
      return false
    }
};
console.log(canAliceWin([1,2,3,4,10]))
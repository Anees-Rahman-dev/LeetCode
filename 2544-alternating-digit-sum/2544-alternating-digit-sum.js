var alternateDigitSum = function(n) {
  let count = 0
  let updated = ""
 let digit =  n.toString().split("")
    for(i=0; i < digit.length; i++){
      let num = Number(digit[i])
      if(i % 2 === 1){
         
         updated -= num
        
      }else{
       updated += num
      }
    }
    return Number(updated) 
};

console.log(alternateDigitSum(521))


var addDigits = function(num){
    while(num >= 10){

        let digits = 0;
        let First = num.toString().split('')
          
        for(let i = 0; i<First.length; i++){
            digits += Number(First[i])
        }
        num = digits
    }
    return num
}
console.log(addDigits(38));

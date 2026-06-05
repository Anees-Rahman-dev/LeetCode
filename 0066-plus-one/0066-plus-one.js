/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function(digits) {
  let str = digits.join('');

 let toBigInt = BigInt(str) +1n

  let result = toBigInt.toString().split('').map(Number);

  return result 
}
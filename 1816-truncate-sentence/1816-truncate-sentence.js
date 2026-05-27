
var truncateSentence = function(s, k) {
   let newWord = s.split(" ").slice(0, k).join(" ")
   return newWord
};
console.log(truncateSentence("Hello how are you Contestant",4))
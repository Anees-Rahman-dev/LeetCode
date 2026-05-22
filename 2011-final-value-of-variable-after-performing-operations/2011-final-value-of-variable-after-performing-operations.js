var finalValueAfterOperations = function(operations) {
  let initially = 0;
  
    for(let i = 0; i < operations.length; i++){
    if( operations[i] === "++X"){
      initially += 1
    }else if(operations[i] === "X++"){
      initially += 1
    }else if(operations[i] === "X--"){
      initially -= 1
    }else if(operations[i] === "--X"){
      initially -=1
    }
    }
    return initially
};
console.log(finalValueAfterOperations(["--X","X++","X++"]))
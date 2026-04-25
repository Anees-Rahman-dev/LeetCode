
var capitalizeTitle = function(title) {
  // let worn = 0
  let splited = title.toLowerCase().split(" ")
     for(i = 0; i < splited.length; i++ ){
        if(splited[i].length > 2){
            splited[i] = splited[i][0].toUpperCase() + splited[i].slice(1)
    }
     }

  return splited.join(" ")

};
console.log(capitalizeTitle("First leTTeR of EACH Word"));
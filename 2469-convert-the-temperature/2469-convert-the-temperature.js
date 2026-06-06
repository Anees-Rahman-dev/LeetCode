var convertTemperature = function(celsius) {
   
   let kelvin = celsius +  273.15 
   let ferrenHeat = celsius * 1.80 + 32.00
    return [kelvin,ferrenHeat]
};
console.log(convertTemperature(122.11))
const convertToCelsius = function(fahren) {
  if(fahren == NaN) return "ERROR";

  return Math.round((fahren-32)*5/9 * 10)/10;;
};

const convertToFahrenheit = function(cels) {
  if(cels == NaN) return "ERROR";

  return Math.round((cels*9/5 + 32) * 10)/10;
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

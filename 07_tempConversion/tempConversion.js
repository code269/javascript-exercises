const convertToCelsius = function (degrees) {
  let fahrenheit = (degrees - 32) * 0.5556;
  return +fahrenheit.toFixed(1);
};

const convertToFahrenheit = function (degrees) {
  let celsius = degrees * 1.8 + 32;
  return +celsius.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};

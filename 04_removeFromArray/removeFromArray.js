const removeFromArray = function (arr, ...values) {
  // How to match values with arr to filter out
  return arr.filter((val) => !values.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;

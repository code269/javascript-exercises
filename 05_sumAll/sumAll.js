const sumAll = function (first, second) {
  if (first < 0 || second < 0) return "ERROR";
  if (!Number.isInteger(first) || !Number.isInteger(second)) return "ERROR";

  let starter = first > second ? second : first;
  let end = first > second ? first : second;
  let runningSum = 0;
  for (let i = starter; i <= end; i++) {
    runningSum += i;
  }
  return runningSum;
};

// Do not edit below this line
module.exports = sumAll;

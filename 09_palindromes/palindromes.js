const palindromes = function (string) {
  //Remove non-alphabetical chars (spaces, commas, etc)
  const mutatedString = string.toLowerCase().replace(/[^a-z]/g, "");
  return mutatedString.split("").reverse().join("") === mutatedString;
};

// Do not edit below this line
module.exports = palindromes;

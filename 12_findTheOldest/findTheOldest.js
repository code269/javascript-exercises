const findTheOldest = function (people) {
  // Get age by year
  function getAge(birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  }

  // Compare the ages
  return people.reduce((oldestPerson, currentPerson) => {
    const oldestAge = getAge(
      oldestPerson.yearOfBirth,
      oldestPerson.yearOfDeath
    );
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );

    return oldestAge > currentAge ? oldestPerson : currentPerson;
  });
};

// Do not edit below this line
module.exports = findTheOldest;

let findTheOldest = function(people) {
    const age = (x) => (x.yearOfDeath || new Date().getFullYear()) - x.yearOfBirth;
    const oldest = people.sort((a, b) =>
      age(a) > age(b) ? -1 : 1
    );
    return oldest[0];
  };
  
module.exports = findTheOldest


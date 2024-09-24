const findTheOldest = function(people) {

    people.sort((personA, personB) =>
         ((personA.yearOfDeath? personA.yearOfDeath: new Date().getFullYear()) - personA.yearOfBirth)
         -((personB.yearOfDeath? personB.yearOfDeath: new Date().getFullYear())- personB.yearOfBirth)
         );

    return people.at(-1);
};

// Do not edit below this line
module.exports = findTheOldest;

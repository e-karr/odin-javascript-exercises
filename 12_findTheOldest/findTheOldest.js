const findTheOldest = function(array) {
    const currentYear = (new Date()).getFullYear();

    let oldest = array.sort(function(a, b) {
        let aBirth = a.yearOfBirth;
        let aDeath = 0;

        let bBirth = b. yearOfBirth;
        let bDeath = 0;

        if (!a.yearOfDeath) {
            aDeath= currentYear;
        } else {
            aDeath = a.yearOfDeath;
        }

        if (!b.yearOfDeath) {
            bDeath = currentYear;
        } else {
            bDeath = b.yearOfDeath;
        }

        return (bDeath - bBirth) - (aDeath - aBirth);
    });

    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;

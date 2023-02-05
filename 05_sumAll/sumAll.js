const sumAll = function(number1, number2) {
    let sum = 0;
    let smallerNumber = 0;
    let largerNumber = 0;

    if (number1 < 0 || number2 < 0 || !Number.isInteger(number1) || !Number.isInteger(number2)) {
        return "ERROR";
    }

    if (number1 < number2) {
        smallerNumber = number1;
        largerNumber = number2;
    } else {
        smallerNumber = number2;
        largerNumber = number1;
    }

    for (let i = smallerNumber; i <= largerNumber; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;

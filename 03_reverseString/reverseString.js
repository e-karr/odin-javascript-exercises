const reverseString = function(string) {
    let reverseString = "";

    for (let i = 0; i < string.length; i++) {
        reverseString = string[i] + reverseString;
    }

    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;

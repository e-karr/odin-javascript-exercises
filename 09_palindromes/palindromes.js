const palindromes = function (phrase) {
    let re = /[^A-Za-z0–9]/g;

    let originalPhrase = phrase.toLowerCase().replace(re, '');

    let reversedPhrase = originalPhrase.split('').reverse().join('');
  
    return originalPhrase === reversedPhrase;
};

// Do not edit below this line
module.exports = palindromes;

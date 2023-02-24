const fibonacci = function(num) {
    let fibonacci = [];

    if (num < 0) {
        return "OOPS";
    }

    if (num === 0) {
        return 0;
    }

    for (let i = 0; i < num; i++) {
        if (i === 0 || i === 1) {
            fibonacci.push(1);
        } else {
            let nextNum = fibonacci[fibonacci.length-1] + fibonacci[fibonacci.length-2]
            fibonacci.push(nextNum);
        }
    }

    return fibonacci[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;

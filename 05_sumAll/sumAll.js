const sumAll = function(num1, num2) {
    if(num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    const smaller = Math.min(num1, num2) - 1;
    const larger = Math.max(num1, num2);

    return Math.abs(smaller*(smaller + 1)/2 - larger*(larger + 1)/2);
};

// Do not edit below this line
module.exports = sumAll;

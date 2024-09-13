const reverseString = function(originalString) {
    const splittedString = originalString.split("");
    
    const reversedArray = splittedString.reverse();

    return reversedArray.join("");
};

// Do not edit below this line
module.exports = reverseString;

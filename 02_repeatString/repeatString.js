const repeatString = function(word, count) {
    if(count < 0) return "ERROR";
    let repeat = '';

    for(let i = 0 ; i < count ; i++) repeat += word;
    
    return repeat;
};

// Do not edit below this line
module.exports = repeatString;

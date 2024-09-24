const palindromes = function (str) {
    str = str.split('').filter((element)=>
    (element.toLowerCase()>='a' 
    && element.toLowerCase() <= 'z'
    || element >= '1' && element <= '9' )).join();

    for(let i = 0 ;i < str.length/2; i++){
        if(str[i].toLowerCase() != str[str.length - i - 1].toLowerCase()) return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;

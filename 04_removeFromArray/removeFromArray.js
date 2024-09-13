const removeFromArray = function(originalArray, ...rmv) {

    for(let i = 0 ; i < rmv.length; i++){
        while(true){
            const index = originalArray.indexOf(rmv[i]);
            
            if(index == -1) break;
            
            originalArray.splice(index, 1);
        }
    }

    return originalArray;

    //Look at the solutions (first one)
};

// Do not edit below this line
module.exports = removeFromArray;

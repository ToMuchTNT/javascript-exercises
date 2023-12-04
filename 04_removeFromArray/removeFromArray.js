const removeFromArray = function(numbers, ...toRemove) {
    let remove = [];
    for (const num of toRemove) {
        remove.push(num)        
    }
    console.log(numbers)
    console.log(remove)
    return numbers.filter(item => !remove.includes(item))
};


// Do not edit below this line
module.exports = removeFromArray;

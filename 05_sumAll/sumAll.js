const sumAll = function(start,end) {
    if (start >= end){
        let temp = start;
        start = end;
        end = temp;
    }
    if (!(typeof start === 'number' && start >= 0)) {
        return 'ERROR'
    }
    if (!(typeof end === 'number' && end >= 0)) {
        return 'ERROR'
    }
    totalSum = 0
    for (i=start;i<end+1;i++) {
        totalSum += i
    }
    return totalSum
};

// Do not edit below this line
module.exports = sumAll;

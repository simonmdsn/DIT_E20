function range(start, end) {
    var array = []
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}

function sum(array) {
    return array.reduce((a,b) => a + b, 0);
}

console.log(sum(range(0,100)));
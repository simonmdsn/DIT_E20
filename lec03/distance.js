function dist(array) {
    return Math.sqrt(array.map(element => element * element).reduce((a, b) => a + b, 0));
}

console.log(dist([3,4]))
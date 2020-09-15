class Vec {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vec) {
        return new Vec(this.x + vec.x, this.y + vec.y);
    }

    minus(vec) {
        return new Vec(this.x - vec.x, this.y - vec.y)
    }

    get length() {
        return dist([this.x, this.y]);
    }
}

// function is from distance.js. Calculates the vector length.
function dist(array) {
    return Math.sqrt(array.map(element => element * element).reduce((a, b) => a + b, 0));
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);
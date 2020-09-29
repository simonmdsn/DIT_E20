var Vec = /** @class */ (function () {
    function Vec(x, y) {
        this.x = x;
        this.y = y;
    }
    Vec.prototype.plus = function (vec) {
        return new Vec(this.x + vec.x, this.y + vec.y);
    };
    Vec.prototype.minus = function (vec) {
        return new Vec(this.x - vec.x, this.y - vec.y);
    };
    Object.defineProperty(Vec.prototype, "length", {
        get: function () {
            return dist([this.x, this.y]);
        },
        enumerable: false,
        configurable: true
    });
    return Vec;
}());
// function is from distance.js. Calculates the vector length.
function dist(array) {
    return Math.sqrt(array.map(function (element) { return element * element; }).reduce(function (a, b) { return a + b; }, 0));
}
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);

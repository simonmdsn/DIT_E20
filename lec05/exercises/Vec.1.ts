class Vec {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    plus(vec) {
        return new Vec(this.x + vec.x, this.y + vec.y);
    }

    minus(vec) {
        return new Vec(this.x - vec.x, this.y - vec.y);
    }

    get length() {
        return dist([this.x, this.y]);
    }
}

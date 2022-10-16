class Location {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    getCoordsFormated() {
        return `X: ${this.x}\nY: ${this.y}\nZ: ${this.z}`;
    }
}

module.exports = Location
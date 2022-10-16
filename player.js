class Player {
    constructor(x, y, z, name) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.name = name;
    }
    getCoordsFormated() {
        return `X: ${this.x}\nY: ${this.y}\nZ: ${this.z}`;
    }
    getName() {
        return this.name;
    }
}

module.exports = Player
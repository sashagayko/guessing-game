class GuessingGame {
    constructor() {}

    current = 0

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.current = Math.round((this.max - this.min) / 2)+this.min
        return this.current
    }

    lower() {
        this.max = this.current
    }

    greater() {
        this.min = this.current
    }
}

module.exports = GuessingGame;

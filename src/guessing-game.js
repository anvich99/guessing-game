class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.minNum = min;
        this.maxNum = max;
    }

    guess() {
        let aver = Math.round( (this.minNum + this.maxNum) / 2 );
        this.result = aver;
        return this.result;
    }

    lower() {
        this.maxNum = this.guess();
    }

    greater() {
        this.minNum = this.guess();
    }
}

module.exports = GuessingGame;

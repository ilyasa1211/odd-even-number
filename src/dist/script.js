"use strict";
class Helper {
    static isOdd(number) {
        return number % 2 != 0;
    }
    static isEven(number) {
        return !this.isOdd(number);
    }
    static getOddNumber(min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
        const result = this.randomInt(min, max);
        return this.isOdd(result) ? result : this.getOddNumber(min, max);
    }
    static getEvenNumber(min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
        const result = this.randomInt(min, max);
        return this.isEven(result) ? result : this.getEvenNumber(min, max);
    }
    static randomInt(min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}

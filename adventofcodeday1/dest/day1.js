"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class Calories {
    constructor() {
        this.sumedUp = [];
        this.readFile = () => {
            this.input = (0, fs_1.readFileSync)('./dest/adventofcodeday1.txt', { encoding: "utf-8" });
        };
        this.workData = () => {
            // this.toStr = this.input?.toString() 
            this.arr = this.input.split('\n').map(function (item) {
                return parseInt(item, 10);
            });
            console.log(this);
        };
        this.workArray = () => {
            this.arr.reduce((sumSoFar, nextValue) => {
                if (typeof nextValue == 'number' && isFinite(nextValue)) {
                    return sumSoFar + nextValue;
                }
                this.sumedUp.push(sumSoFar);
                sumSoFar = 0;
                return sumSoFar;
            }, 0);
        };
        this.answer = () => {
            // console.log(this.sumedUp)
            let data = this.sumedUp;
            let max = 0;
            for (let i = 0; i < data.length; i++) {
                if (data[i] > max) {
                    max = data[i];
                }
            }
            return max;
        };
    }
}
let elvenCalories = new Calories();
elvenCalories.readFile();
elvenCalories.workData();
elvenCalories.workArray();
console.log(elvenCalories.answer());

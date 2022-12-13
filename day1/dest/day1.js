"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class Calories {
    constructor() {
        /**
         *
         * @returns the data input to work with
         */
        this.getInput = () => {
            const inputElvenCalories = (0, fs_1.readFileSync)('./dest/adventofcodeday1.txt', { encoding: "utf-8" });
            return inputElvenCalories;
        };
        /**
         *
         * @returns The input converted to an array of numbers
         */
        this.inputToNumber = () => {
            const inputElvenCalories = this.getInput();
            let elvenCaloriesArray = inputElvenCalories.split('\n').map(function (item) {
                return parseInt(item, 10);
            });
            return elvenCaloriesArray;
        };
        /**
         *
         * @returns Calculates total calories per elf
         */
        this.caloriesPerElf = () => {
            const elvenCaloriesArray = this.inputToNumber();
            let caloriesPerElf = [];
            elvenCaloriesArray.reduce((sumSoFar, nextValue) => {
                if (typeof nextValue == 'number' && isFinite(nextValue)) {
                    return sumSoFar + nextValue;
                }
                caloriesPerElf.push(sumSoFar);
                sumSoFar = 0;
                return sumSoFar;
            }, 0);
            console.log(caloriesPerElf);
            return caloriesPerElf;
        };
        /**
         *
         * @returns The elf with the highest amount of calories
         */
        this.highestCalories = () => {
            const caloriesPerElf = this.caloriesPerElf();
            // console.log(this.sumedUp)
            let highestCalories = 0;
            for (let i = 0; i < caloriesPerElf.length; i++) {
                if (caloriesPerElf[i] > highestCalories) {
                    highestCalories = caloriesPerElf[i];
                }
            }
            console.log(highestCalories);
            return highestCalories;
        };
    }
}
let elvenCalories = new Calories();
elvenCalories.getInput();
elvenCalories.inputToNumber();
elvenCalories.caloriesPerElf();
elvenCalories.highestCalories();

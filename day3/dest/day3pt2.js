"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class Day3 {
    constructor() {
        this.splitted = [];
        this.difference = [];
        /**
         * This method returns the packing instructions in string format
         */
        this.getPackingInstructionsData = () => {
            const rucksackContainments = (0, fs_1.readFileSync)('./dest/input.txt', { encoding: "utf-8" }).toString().split('\n');
            return rucksackContainments;
        };
        /**
         *
         * @returns The overlap of values per 3 rugsacks (strings) in an array format
         *
         */
        this.perThreeRucksacks = () => {
            const rucksackContainments = this.getPackingInstructionsData();
            let temporaryArray = [];
            let compartmentOverlap = [];
            for (let i = 0; i < rucksackContainments.length; i += 3) {
                let group1 = rucksackContainments[i].split('');
                let group2 = rucksackContainments[i + 1];
                let group3 = rucksackContainments[i + 2];
                for (let j = 0; j < group1.length; j++) {
                    if (group2.includes(group1[j]) && group3.includes(group1[j]) && !temporaryArray.includes(group1[j])) {
                        temporaryArray.push(group1[j]);
                    }
                }
                compartmentOverlap.push(...temporaryArray);
                temporaryArray = [];
            }
            return compartmentOverlap;
        };
        /**
         * This method returns the sum of the values of the overlap.
         */
        this.findValues = () => {
            const compartmentOverlap = this.perThreeRucksacks();
            let values = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let count = 0;
            let countRows = 0;
            compartmentOverlap.map(a => {
                count += values.indexOf(a);
                // countRows += 1
                // console.log(a, values.indexOf(a))
            });
            console.log(count);
            // console.log(countRows)
        };
    }
}
let day3 = new Day3;
day3.getPackingInstructionsData();
// day3.splitString()
day3.perThreeRucksacks();
day3.findValues();

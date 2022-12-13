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
            const rucksackContainments = (0, fs_1.readFileSync)('./dest/input.txt', { encoding: "utf-8" }).toString();
            return rucksackContainments;
        };
        /**
         * This method return the packing instructions split per rucksack and per compartment
         * of the rucksack
         */
        this.ruckSackCompartments = () => {
            const rucksackContainments = this.getPackingInstructionsData();
            let ruckSackCompartment = [];
            const rucksack = rucksackContainments.split('\n');
            rucksack.map(a => {
                // console.log(a.length)
                let middle = a.length / 2;
                let s1 = a.substring(0, middle);
                let s2 = a.substring(middle); // I had middle + 1 and this was causing the issie that only 287 rows were read instead of 300.
                ruckSackCompartment.push([s1, s2]);
            });
            return ruckSackCompartment;
        };
        /**
         *
         * @returns This overlap of letters in of the 2 compartments per rucksack
         */
        this.compareCompartments = () => {
            const ruckSackCompartment = this.ruckSackCompartments();
            let compartmentOverlap = [];
            let temporaryArray = [];
            for (let i = 0; i < ruckSackCompartment.length; i++) { // Loop over string
                let str1 = ruckSackCompartment[i][0].split(''); // Split string one because I am going to loop over this one
                let str2 = ruckSackCompartment[i][1]; // Let it as string to use .includes
                for (let j = 0; j < str1.length; j++) { // New for loop to iterate over str1.
                    if (str2.includes(str1[j]) && !temporaryArray.includes(str1[j])) { // If str2.includes the values of str1[j] and the same value is NOT already in the temporary array. Push it to a temporary array.
                        temporaryArray.push(str1[j]);
                    }
                    else {
                        //pass 
                    }
                }
                compartmentOverlap.push(...temporaryArray); // after every iteration of a whole string push it from the temporary array to the definite array.
                temporaryArray = []; // clear out the temp array again.
            }
            return compartmentOverlap;
        };
        /**
         * This method returns the sum of the values of the overlap.
         */
        this.findValues = () => {
            const compartmentOverlap = this.compareCompartments();
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
day3.ruckSackCompartments();
day3.compareCompartments();
day3.findValues();

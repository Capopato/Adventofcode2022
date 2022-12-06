"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
// import data
// split te string on the half
// check of a letter from string1 is also in string2 with regex?
// push the letter that is double to a new array
// make a new score and 1 string: a-z + A-Z. When indexing the string it should be minus one because index normally starts at 0.
// Scores are a-z = 1-26 and A-Z 27-52
// iterate over new array and find the position of the letter in the string and returns it's index number to let count
class Day3 {
    constructor() {
        this.splitted = [];
        this.difference = [];
        this.importData = () => {
            this.str = (0, fs_1.readFileSync)('./dest/input.txt', { encoding: "utf-8" }).toString();
        };
        this.stringsSplit = () => {
            let arr = this.str.split('\n');
            arr.map(a => {
                var _a;
                // console.log(a.length)
                let middle = a.length / 2;
                let s1 = a.substring(0, middle);
                let s2 = a.substring(middle); // I had middle + 1 and this was causing the issie that only 287 rows were read instead of 300.
                (_a = this.splitted) === null || _a === void 0 ? void 0 : _a.push([s1, s2]);
            });
        };
        this.compareString = () => {
            let tempArr = [];
            for (let i = 0; i < this.splitted.length; i++) { // Loop over string
                let str1 = this.splitted[i][0].split(''); // Split string one because I am going to loop over this one
                let str2 = this.splitted[i][1]; // Let it as string to use .includes
                for (let j = 0; j < str1.length; j++) { // New for loop to iterate over str1.
                    if (str2.includes(str1[j]) && !tempArr.includes(str1[j])) { // If str2.includes the values of str1[j] and the same value is NOT already in the temporary array. Push it to a temporary array.
                        tempArr.push(str1[j]);
                    }
                    else {
                        //pass 
                    }
                }
                this.difference.push(...tempArr); // after every iteration of a whole string push it from the temporary array to the definite array.
                tempArr = []; // clear out the temp array again.
            }
        };
        this.findValues = () => {
            var _a;
            let values = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let count = 0;
            let countRows = 0;
            (_a = this.difference) === null || _a === void 0 ? void 0 : _a.map(a => {
                count += values.indexOf(a);
                countRows += 1;
                console.log(a, values.indexOf(a));
            });
            console.log(count);
            console.log(countRows);
        };
    }
}
let day3 = new Day3;
day3.importData();
day3.stringsSplit();
day3.compareString();
day3.findValues();

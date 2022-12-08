"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class Day3 {
    constructor() {
        this.splitted = [];
        this.difference = [];
        this.importData = () => {
            this.str = (0, fs_1.readFileSync)('./dest/input.txt', { encoding: "utf-8" }).toString();
        };
        this.splitString = () => {
            var _a;
            this.splitted = (_a = this.str) === null || _a === void 0 ? void 0 : _a.split('\n');
        };
        this.perThreeString = () => {
            var _a;
            let tempArr = [];
            for (let i = 0; i < this.splitted.length; i += 3) {
                let str1 = this.splitted[i].split('');
                let str2 = this.splitted[i + 1];
                let str3 = this.splitted[i + 2];
                for (let j = 0; j < str1.length; j++) {
                    if (str2.includes(str1[j]) && str3.includes(str1[j]) && !tempArr.includes(str1[j])) {
                        tempArr.push(str1[j]);
                    }
                }
                (_a = this.difference) === null || _a === void 0 ? void 0 : _a.push(...tempArr);
                tempArr = [];
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
day3.splitString();
day3.perThreeString();
day3.findValues();

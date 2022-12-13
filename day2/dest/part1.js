"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class Day2 {
    constructor() {
        this.importData = () => {
            this.str = (0, fs_1.readFileSync)('./dest/input.txt', { encoding: "utf-8" }).toString();
        };
        this.splitArray = () => {
            var _a;
            let arr = (_a = this.str) === null || _a === void 0 ? void 0 : _a.split('\n');
            this.splitArr = arr === null || arr === void 0 ? void 0 : arr.map((a) => {
                return a.split(' ');
            });
        };
        this.workData = () => {
            let draw = 3;
            let win = 6;
            let rock = 1;
            let paper = 2;
            let scissor = 3;
            let count = 0;
            for (let i = 0; i < this.splitArr.length; i++) {
                //draw conditions
                if (this.splitArr[i][0] == 'A' && this.splitArr[i][1] == 'X') {
                    count += draw + rock;
                }
                else if (this.splitArr[i][0] == 'B' && this.splitArr[i][1] == 'Y') {
                    count += draw + paper;
                }
                else if (this.splitArr[i][0] == 'C' && this.splitArr[i][1] == 'Z') {
                    count += draw + scissor;
                }
                // winning conditions
                else if (this.splitArr[i][0] == 'A' && this.splitArr[i][1] == 'Y') {
                    count += win + paper;
                }
                else if (this.splitArr[i][0] == 'B' && this.splitArr[i][1] == 'Z') {
                    count += win + scissor;
                }
                else if (this.splitArr[i][0] == 'C' && this.splitArr[i][1] == 'X') {
                    count += win + rock;
                }
                // losing conditions
                else if (this.splitArr[i][0] == 'A' && this.splitArr[i][1] == 'Z') {
                    count += scissor;
                }
                else if (this.splitArr[i][0] == 'B' && this.splitArr[i][1] == 'X') {
                    count += rock;
                }
                else if (this.splitArr[i][0] == 'C' && this.splitArr[i][1] == 'Y') {
                    count += paper;
                }
            }
            console.log(count);
            return count;
        };
    }
}
let day2 = new Day2;
day2.importData();
day2.splitArray();
day2.workData();

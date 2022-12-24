"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const assignmentPairs = (0, fs_1.readFileSync)('./input.txt', { encoding: "utf-8" });
const splitOfPairs = assignmentPairs.split('\n');
const splitPerPair = [];
let count = 0;
// split per pair and convert to number
splitOfPairs.map((twoPairs) => {
    const pairs = twoPairs.split(',');
    splitPerPair.push({
        pairOne: pairs[0].split('-').map(Number),
        pairTwo: pairs[1].split('-').map(Number)
    });
});
// Part 1
for (let i = 0; i < splitPerPair.length; i++) {
    // Create constant of start/end num of pair one and two
    const pairOneStartNum = splitPerPair[i].pairOne[0];
    const pairOneEndNum = splitPerPair[i].pairOne[1];
    const pairTwoStartNum = splitPerPair[i].pairTwo[0];
    const pairTwoEndNum = splitPerPair[i].pairTwo[1];
    // Check if startnum pair one is lower that startnum pair two and visa versa
    // And check if endnum pair one is higher than endnum pair two and visa versa
    if (pairOneStartNum <= pairTwoStartNum && pairOneEndNum >= pairTwoEndNum) {
        count += 1;
    }
    else if (pairTwoStartNum <= pairOneStartNum && pairTwoEndNum >= pairOneEndNum) {
        count += 1;
    }
}
// Part 2
let countPartTwo = 0;
for (let i = 0; i < splitPerPair.length; i++) {
    // Create constant of start/end num of pair one and two
    const pairOneStartNum = splitPerPair[i].pairOne[0];
    const pairOneEndNum = splitPerPair[i].pairOne[1];
    const pairTwoStartNum = splitPerPair[i].pairTwo[0];
    const pairTwoEndNum = splitPerPair[i].pairTwo[1];
    // Check if end number of pair one has overlap with startnumber of pair two 
    // And check if end number of pair two if equal of higher than start number pair one.
    if (pairOneEndNum >= pairTwoStartNum && pairTwoEndNum >= pairOneStartNum) {
        console.log(pairOneEndNum);
        countPartTwo += 1;
    }
}
console.log(countPartTwo);

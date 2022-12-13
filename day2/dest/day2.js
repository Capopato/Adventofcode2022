"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class Day2 {
    constructor() {
        this.splitArr = [];
        /**
         * This method returns the data input to a string format
         */
        this.getInput = () => {
            const strategyGuide = (0, fs_1.readFileSync)('./dest/input.txt', { encoding: "utf-8" }).toString();
            return strategyGuide;
        };
        /**
         * This method returns the strategy split per turn and split for opponent and myself
         */
        this.getStrategy = () => {
            const strategyGuide = this.getInput();
            const strategyPerMove = strategyGuide.split('\n');
            const strategyOpponentMe = strategyPerMove.map((a) => {
                return a.split(' ');
            });
            return strategyOpponentMe;
        };
        /**
         *
         * @returns The calculated score based on the rules.
         * Divided in 3 conditions: draw, winning and losing.
         */
        this.part1 = () => {
            const strategyOpponentMe = this.getStrategy();
            let draw = 3;
            let win = 6;
            let rock = 1;
            let paper = 2;
            let scissor = 3;
            let count = 0;
            for (let i = 0; i < strategyOpponentMe.length; i++) {
                //draw conditions
                if (strategyOpponentMe[i][0] == 'A' && strategyOpponentMe[i][1] == 'X') {
                    count += draw + rock;
                }
                else if (strategyOpponentMe[i][0] == 'B' && strategyOpponentMe[i][1] == 'Y') {
                    count += draw + paper;
                }
                else if (strategyOpponentMe[i][0] == 'C' && strategyOpponentMe[i][1] == 'Z') {
                    count += draw + scissor;
                }
                // winning conditions
                else if (strategyOpponentMe[i][0] == 'A' && strategyOpponentMe[i][1] == 'Y') {
                    count += win + paper;
                }
                else if (strategyOpponentMe[i][0] == 'B' && strategyOpponentMe[i][1] == 'Z') {
                    count += win + scissor;
                }
                else if (strategyOpponentMe[i][0] == 'C' && strategyOpponentMe[i][1] == 'X') {
                    count += win + rock;
                }
                // losing conditions
                else if (strategyOpponentMe[i][0] == 'A' && strategyOpponentMe[i][1] == 'Z') {
                    count += scissor;
                }
                else if (strategyOpponentMe[i][0] == 'B' && strategyOpponentMe[i][1] == 'X') {
                    count += rock;
                }
                else if (strategyOpponentMe[i][0] == 'C' && strategyOpponentMe[i][1] == 'Y') {
                    count += paper;
                }
            }
            console.log(count);
            return count;
        };
        /**
         *
         * @returns The score based on the rules.
         * Divided in 3 conditions: rock, paper, scissor.
         */
        this.part2 = () => {
            let lose = 0;
            let draw = 3;
            let win = 6;
            let rock = 1;
            let paper = 2;
            let scissor = 3;
            let count = 0;
            const strategyOpponentMe = this.getStrategy();
            for (let i = 0; i < strategyOpponentMe.length; i++) {
                //Rock conditions
                if (strategyOpponentMe[i][0] == 'A' && strategyOpponentMe[i][1] == 'X') {
                    count += lose + scissor;
                }
                else if (strategyOpponentMe[i][0] == 'A' && strategyOpponentMe[i][1] == 'Y') {
                    count += draw + rock;
                }
                else if (strategyOpponentMe[i][0] == 'A' && strategyOpponentMe[i][1] == 'Z') {
                    count += win + paper;
                }
                //Paper conditions
                else if (strategyOpponentMe[i][0] == 'B' && strategyOpponentMe[i][1] == 'X') {
                    count += lose + rock;
                }
                else if (strategyOpponentMe[i][0] == 'B' && strategyOpponentMe[i][1] == 'Y') {
                    count += draw + paper;
                }
                else if (strategyOpponentMe[i][0] == 'B' && strategyOpponentMe[i][1] == 'Z') {
                    count += win + scissor;
                }
                //Scissor conditions
                else if (strategyOpponentMe[i][0] == 'C' && strategyOpponentMe[i][1] == 'X') {
                    count += lose + paper;
                }
                else if (strategyOpponentMe[i][0] == 'C' && strategyOpponentMe[i][1] == 'Y') {
                    count += draw + scissor;
                }
                else if (strategyOpponentMe[i][0] == 'C' && strategyOpponentMe[i][1] == 'Z') {
                    count += win + rock;
                }
            }
            console.log(count);
            return count;
        };
    }
}
let day2 = new Day2;
day2.getInput();
day2.getStrategy();
day2.part1();
day2.part2();

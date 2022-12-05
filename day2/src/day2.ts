import { readFileSync } from 'fs';

class Day2{
    private str?: string
    private splitArr?: string[][] | undefined

    importData = () => {
        this.str = readFileSync('./dest/input.txt', {encoding: "utf-8"}).toString()
    }

    splitArray = () => {
        let arr: string[] | undefined = this.str?.split('\n')
        this.splitArr = arr?.map((a) => {
            return a.split(' ')
        })
    }

    part1 = () => {
        let draw: number = 3
        let win: number = 6
        let rock: number = 1
        let paper: number = 2
        let scissor: number = 3

        let count: number = 0

        for(let i = 0; i < this.splitArr.length; i++){
            //draw conditions
            if (this.splitArr[i][0] == 'A' && this.splitArr[i][1] == 'X'){
                count += draw + rock
            }
            else if (this.splitArr[i][0] == 'B' && this.splitArr[i][1] == 'Y'){
                count += draw + paper
            }
            else if (this.splitArr[i][0] == 'C' && this.splitArr[i][1] == 'Z'){
                count += draw + scissor
            }
            // winning conditions
            else if(this.splitArr[i][0] == 'A' && this.splitArr[i][1] == 'Y'){
                count += win + paper
            }
            else if(this.splitArr[i][0] == 'B' && this.splitArr[i][1] == 'Z'){
                count += win + scissor
            }
            else if(this.splitArr[i][0] == 'C' && this.splitArr[i][1] == 'X'){
                count += win + rock
            }
            // losing conditions
            else if(this.splitArr[i][0] == 'A' && this.splitArr[i][1] == 'Z'){
                count += scissor
            }
            else if(this.splitArr[i][0] == 'B' && this.splitArr[i][1] == 'X'){
                count += rock
            }
            else if(this.splitArr[i][0] == 'C' && this.splitArr[i][1] == 'Y'){
                count += paper
            }
        }
        console.log(count)
        return count
    }

    part2 = () => {
        let lose: number = 0
        let draw: number = 3
        let win: number = 6
        let rock: number = 1
        let paper: number = 2
        let scissor: number = 3
        let count: number = 0

        for(let i = 0; i < this.splitArr.length; i++){
            //Rock conditions
            if (this.splitArr[i][0] == 'A' && this.splitArr[i][1] == 'X'){
                count += lose + scissor
            }
            else if (this.splitArr[i][0] == 'A' && this.splitArr[i][1] == 'Y'){
                count += draw + rock
            }
            else if (this.splitArr[i][0] == 'A' && this.splitArr[i][1] == 'Z'){
                count += win + paper
            }
            //Paper conditions
            else if (this.splitArr[i][0] == 'B' && this.splitArr[i][1] == 'X'){
                count += lose + rock
            }
            else if (this.splitArr[i][0] == 'B' && this.splitArr[i][1] == 'Y'){
                count += draw + paper
            }
            else if (this.splitArr[i][0] == 'B' && this.splitArr[i][1] == 'Z'){
                count += win + scissor
            }
            //Scissor conditions
            else if (this.splitArr[i][0] == 'C' && this.splitArr[i][1] == 'X'){
                count += lose + paper
            }
            else if (this.splitArr[i][0] == 'C' && this.splitArr[i][1] == 'Y'){
                count += draw + scissor
            }
            else if (this.splitArr[i][0] == 'C' && this.splitArr[i][1] == 'Z'){
                count += win + rock
            }
        }
        console.log(count)
        return count
    }
}

let day2 = new Day2
day2.importData()
day2.splitArray()
// day2.part1()
day2.part2()

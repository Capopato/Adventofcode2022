import { readFileSync } from 'fs';

class Calories{
    private input?: string
    private ans?: Number[] | undefined

    readFile = () => {
        this.input = readFileSync('./dest/adventofcodeday1.txt', {encoding: "utf-8"})
    }

    // convert input to array with a split on ' '
    // loop over array with reduce and find the higest number

    workData = () => {
        const toStr: string | undefined = this.input?.toString()
        const arr: number[] = toStr.split('\n').map(function(item) {
            return parseInt(item, 10)
        })
        // make a method that iterates over the array and cumulates the numbers till it hits a NaN
        
        let test: [] = []
    
        let sum = arr.reduce((sumSoFar: any, nextValue: any): number | string=> {
            if (typeof nextValue == 'number' && isFinite(nextValue)){
                return sumSoFar + nextValue
            }
            test.push(sumSoFar)
            sumSoFar = 0
            return sumSoFar
        }, 0)
        console.log(test)
    }
}

let elvenCalories = new Calories()
elvenCalories.readFile()
elvenCalories.workData()
// elvenCalories.test()

// fetchData = async () => {
//     const result = await fetch('https://adventofcode.com/2022/day/1/input', {
//         method: 'GET',
//         mode: 'no-cors',
//         credentials: "same-origin",
//     })
//     const data = await result.text()
//     console.log(data)
// }
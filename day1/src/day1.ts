import { readFileSync } from 'fs';

class Calories{
    private input?: string | undefined
    // private toStr?: string | undefined
    private arr?: number[] | undefined
    private sumedUp?: number[] | undefined = []

    readFile = () => {
        this.input = readFileSync('./dest/adventofcodeday1.txt', {encoding: "utf-8"})
    }

    workData = () => {
        // this.toStr = this.input?.toString() 
        this.arr = this.input.split('\n').map(function(item) {
            return parseInt(item, 10)
        })
        console.log(this)
    }

    workArray = () => {    
        this.arr.reduce((sumSoFar: any, nextValue: any): number | string=> {
            if (typeof nextValue == 'number' && isFinite(nextValue)){
                return sumSoFar + nextValue
            }
            this.sumedUp.push(sumSoFar)
            sumSoFar = 0
            return sumSoFar
        }, 0)
    }

    answer = () => {
        // console.log(this.sumedUp)
        let data: number[] | undefined = this.sumedUp
        let max: number = 0
        for (let i = 0; i < data.length; i++){
            if (data[i] > max){
                max = data[i]
            }
        }
        return max
    }
}

let elvenCalories = new Calories()
elvenCalories.readFile()
elvenCalories.workData()
elvenCalories.workArray()
console.log(elvenCalories.answer())
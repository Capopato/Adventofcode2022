import { readFileSync } from 'fs';

class Calories{
    /**
     * 
     * @returns the data input to work with
     */
    getInput = () => {
        const inputElvenCalories: string = readFileSync('./dest/adventofcodeday1.txt', {encoding: "utf-8"})
        return inputElvenCalories
    }

    /**
     * 
     * @returns The input converted to an array of numbers
     */
    inputToNumber = () => {
        const inputElvenCalories: string = this.getInput()

        let elvenCaloriesArray: number[] = inputElvenCalories.split('\n').map(function(item) {
            return parseInt(item, 10)
        })
        return elvenCaloriesArray
    }

    /**
     * 
     * @returns Calculates total calories per elf
     */
    caloriesPerElf = () => {   
        const elvenCaloriesArray: number[] = this.inputToNumber()
        let caloriesPerElf: number[] = []

        elvenCaloriesArray.reduce((sumSoFar: any, nextValue: any): number | string=> {
            if (typeof nextValue == 'number' && isFinite(nextValue)){
                return sumSoFar + nextValue
            }
            caloriesPerElf.push(sumSoFar)
            sumSoFar = 0
            return sumSoFar
        }, 0)
        console.log(caloriesPerElf)
        return caloriesPerElf
    }

    /**
     * 
     * @returns The elf with the highest amount of calories
     */
    highestCalories = () => {
        const caloriesPerElf = this.caloriesPerElf()
        // console.log(this.sumedUp)
        let highestCalories: number = 0
        for (let i = 0; i < caloriesPerElf.length; i++){
            if (caloriesPerElf[i] > highestCalories){
                highestCalories = caloriesPerElf[i]
            }
        }
        console.log(highestCalories)
        return highestCalories
    }
}

let elvenCalories = new Calories()
elvenCalories.getInput()
elvenCalories.inputToNumber()
elvenCalories.caloriesPerElf()
elvenCalories.highestCalories()
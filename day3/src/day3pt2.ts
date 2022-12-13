import {readFileSync} from 'fs'

class Day3{
    private str?: string  
    private splitted?: string[][] = []
    private difference?: string[] = []

    /**
     * This method returns the packing instructions in string format
     */
     getPackingInstructionsData = () => {
        const rucksackContainments: string = readFileSync('./dest/input.txt', {encoding: "utf-8"}).toString().split('\n')
        return rucksackContainments
    }

    /**
     * 
     * @returns The overlap of values per 3 rugsacks (strings) in an array format
     * 
     */
    perThreeRucksacks = () => {
        const rucksackContainments = this.getPackingInstructionsData()
        let temporaryArray: string[] = []
        let compartmentOverlap: string[] = []

        for (let i = 0; i < rucksackContainments.length; i+=3){ 
            let group1: string[] = rucksackContainments[i].split('') 
            let group2: string = rucksackContainments[i+1] 
            let group3: string = rucksackContainments[i+2]

            for (let j = 0; j < group1.length; j++){
                if(group2.includes(group1[j]) && group3.includes(group1[j]) && !temporaryArray.includes(group1[j])){
                    temporaryArray.push(group1[j])
                }
            }
            compartmentOverlap.push(...temporaryArray)
            temporaryArray = []
        }
        return compartmentOverlap
    }

    /**
     * This method returns the sum of the values of the overlap.
     */
    findValues = () => {
        const compartmentOverlap = this.perThreeRucksacks()
        let values: string = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let count: number = 0
        let countRows: number = 0

        compartmentOverlap.map(a => {
            count += values.indexOf(a)
            // countRows += 1
            // console.log(a, values.indexOf(a))
        })
        console.log(count)
        // console.log(countRows)
    }
}

let day3 = new Day3
day3.getPackingInstructionsData()
// day3.splitString()
day3.perThreeRucksacks()
day3.findValues()
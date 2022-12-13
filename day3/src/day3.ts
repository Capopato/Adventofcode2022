import {readFileSync} from 'fs'

class Day3{
    private str?: string  
    private splitted?: string[][] = []
    private difference?: string[] = []

    /**
     * This method returns the packing instructions in string format
     */
    getPackingInstructionsData = () => {
        const rucksackContainments: string = readFileSync('./dest/input.txt', {encoding: "utf-8"}).toString()
        return rucksackContainments
    }

    /**
     * This method return the packing instructions split per rucksack and per compartment 
     * of the rucksack
     */
    ruckSackCompartments = () => {
        const rucksackContainments: string = this.getPackingInstructionsData()
        let ruckSackCompartment: string[][] = []

        const rucksack: string[] = rucksackContainments.split('\n')
        
        rucksack.map(a => {
            // console.log(a.length)
            let middle: number = a.length/2
            let s1: string = a.substring(0, middle)
            let s2: string = a.substring(middle)  // I had middle + 1 and this was causing the issie that only 287 rows were read instead of 300.
            ruckSackCompartment.push([s1, s2])
        })
        return ruckSackCompartment
    }
    /**
     * 
     * @returns This overlap of letters in of the 2 compartments per rucksack
     */
    compareCompartments = () => {
        const ruckSackCompartment = this.ruckSackCompartments()
        let compartmentOverlap: string[] = []
        let temporaryArray: string[] = []

        for (let i = 0; i < ruckSackCompartment.length; i++){ // Loop over string
            let str1: string[] = ruckSackCompartment[i][0].split('') // Split string one because I am going to loop over this one
            let str2: string = ruckSackCompartment[i][1] // Let it as string to use .includes

            for (let j = 0; j < str1.length; j++){ // New for loop to iterate over str1.
                if (str2.includes(str1[j]) && !temporaryArray.includes(str1[j])){ // If str2.includes the values of str1[j] and the same value is NOT already in the temporary array. Push it to a temporary array.
                    temporaryArray.push(str1[j])
                }
                else{ 
                    //pass 
                }
            }
            compartmentOverlap.push(...temporaryArray) // after every iteration of a whole string push it from the temporary array to the definite array.
            temporaryArray = [] // clear out the temp array again.
        }
        return compartmentOverlap
    }

    /**
     * This method returns the sum of the values of the overlap.
     */
    findValues = () => {
        const compartmentOverlap: string[] = this.compareCompartments()
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
day3.ruckSackCompartments()
day3.compareCompartments()
day3.findValues()
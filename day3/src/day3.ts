import {readFileSync} from 'fs'

class Day3{
    private str?: string  
    private splitted?: string[][] = []
    private difference?: string[] = []

    importData = () => {
        this.str = readFileSync('./dest/input.txt', {encoding: "utf-8"}).toString()
    }

    stringsSplit = () => {
        let arr: string[] = this.str.split('\n')
        arr.map(a => {
            // console.log(a.length)
            let middle: number = a.length/2
            let s1: string = a.substring(0, middle)
            let s2: string = a.substring(middle)  // I had middle + 1 and this was causing the issie that only 287 rows were read instead of 300.
            this.splitted?.push([s1, s2])
        })
    }

    compareString = () => {
        let tempArr: string[] = []

        for (let i = 0; i < this.splitted.length; i++){ // Loop over string
            let str1: string[] = this.splitted[i][0].split('') // Split string one because I am going to loop over this one
            let str2: string = this.splitted[i][1] // Let it as string to use .includes

            for (let j = 0; j < str1.length; j++){ // New for loop to iterate over str1.
                if (str2.includes(str1[j]) && !tempArr.includes(str1[j])){ // If str2.includes the values of str1[j] and the same value is NOT already in the temporary array. Push it to a temporary array.
                    tempArr.push(str1[j])
                }
                else{ 
                    //pass 
                }
            }
            this.difference.push(...tempArr) // after every iteration of a whole string push it from the temporary array to the definite array.
            tempArr = [] // clear out the temp array again.
        }
    }

    findValues = () => {
        let values: string = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let count: number = 0
        let countRows: number = 0

        this.difference?.map(a => {
            count += values.indexOf(a)
            countRows += 1
            console.log(a, values.indexOf(a))
        })
        console.log(count)
        console.log(countRows)
    }
}

let day3 = new Day3
day3.importData()
day3.stringsSplit()
day3.compareString()
day3.findValues()
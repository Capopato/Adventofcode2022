import {readFileSync} from 'fs'

class Day3{
    private str?: string  
    private splitted?: string[][] = []
    private difference?: string[] = []

    importData = () => {
        this.str = readFileSync('./dest/input.txt', {encoding: "utf-8"}).toString()
    }

    splitString = () => {
        this.splitted = this.str?.split('\n')
    }

    perThreeString = () => {
        let tempArr: string[] = []
        for (let i = 0; i < this.splitted.length; i+=3){ 
            let str1: string[] = this.splitted[i].split('') 
            let str2: string = this.splitted[i+1] 
            let str3: string = this.splitted[i+2]

            for (let j = 0; j < str1.length; j++){
                if(str2.includes(str1[j]) && str3.includes(str1[j]) && !tempArr.includes(str1[j])){
                    tempArr.push(str1[j])
                }
            }
            this.difference?.push(...tempArr)
            tempArr = []
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
day3.splitString()
day3.perThreeString()
day3.findValues()
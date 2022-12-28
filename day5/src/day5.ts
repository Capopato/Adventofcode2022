import { readFileSync } from 'fs'

const getDataInput = () => {
    let crateArrangementInput: string[] = readFileSync('./input.txt', {encoding: "utf-8"}).split('\n')
    return crateArrangementInput
}

const orderOfTheCrateArrangement = () => {
    const crateArrangementInput: string[]  = getDataInput()
    const moves: string[] =[]
    const startArrangement: startArrangementOptions[] = []
    interface startArrangementOptions{
        row1: string
        row2: string
        row3: string
        row4: string
        row5: string
        row6: string
        row7: string
        row8: string
        row9: string
    }
    // Convert input and push the start arrangement to array
    // Push the moves to a different array
    crateArrangementInput.map(column => {
        let index: number = 1
        // != move because every row that starts with move is about movements and that will be used later
        if (column.split(' ')[0] != 'move') {
            // Index + 4 because in the string the space between every value is 4 spaces
            for (let i = 1; i < column.length; i++) {
                const row1: string = column[index]
                index += 4
                const row2: string = column[index]
                index += 4
                const row3: string = column[index]
                index += 4
                const row4: string = column[index]
                index += 4
                const row5: string = column[index]
                index += 4
                const row6: string = column[index]
                index += 4
                const row7: string = column[index]
                index += 4
                const row8: string = column[index]
                index += 4
                const row9: string = column[index]
                // Push the column to array 
                startArrangement.push({
                    row1: row1,
                    row2: row2,
                    row3: row3,
                    row4: row4,
                    row5: row5,
                    row6: row6,
                    row7: row7,
                    row8: row8,
                    row9: row9,
                })
                return
            }
        }
    })

    let row1: string[] = []
    let row2: string[] = []
    let row3: string[] = []
    let row4: string[] = []
    let row5: string[] = []
    let row6: string[] = []
    let row7: string[] = []
    let row8: string[] = []
    let row9: string[] = []

    // Push the start arrangement in top > bottom order to array
    startArrangement.map(rows => {
        if (rows.row1 != ' '){
            row1.push(rows.row1)
        }
        if (rows.row2 != ' '){
            row2.push(rows.row2)
        }
        if (rows.row3 != ' '){
            row3.push(rows.row3)
        }
        if (rows.row4 != ' '){
            row4.push(rows.row4)
        }
        if (rows.row5 != ' '){
            row5.push(rows.row5)
        }
        if (rows.row6 != ' '){
            row6.push(rows.row6)
        }
        if (rows.row7 != ' '){
            row7.push(rows.row7)
        }
        if (rows.row8 != ' '){
            row8.push(rows.row8)
        }
        if (rows.row9 != ' '){
            row9.push(rows.row9)
        }
    })

    // Create object of all the rows
    const totalRows: string[][] = [row1, row2, row3, row4, row5, row6, row7, row8, row9,]
    return totalRows
}

const movesOfTheCrates = () => {
    const crateArrangementInput: string[]  = getDataInput()
    const moves: string[] =[]
    crateArrangementInput.map(column => {
        if (column.split(' ')[0] == 'move') {
            moves.push(column)
        }
    })
    // All the numbers from the string will be pushed to this array
    let allTheNumsFromMoves: string[] = []

    // Check the string for numbers and if word == a number push to allTheNumsFromMoves
    moves.map(move => {
        const movesSplitPerWord = move.split(' ')
        for (let word of movesSplitPerWord) {
            if (word != ' ' && word != 'move' && word != 'from' && word != 'to'){
                allTheNumsFromMoves.push(word)
            }
        }
    })

    // Movement instructions will be pushed to this param
    let numbersPerMovementRow: string[][] = []

    // Split allTheNumsFromMoves per 3 index because the movement instructions goes per 3 numbers
    // Push per 3 movement instructions to a new array so that it is easier to work with.
    for (let i = 0; i < allTheNumsFromMoves.length; i+=3 ){
        let rows: string[] = allTheNumsFromMoves.slice(i,i+3)
        numbersPerMovementRow.push(rows)
    }
    return numbersPerMovementRow
}

/**
 * Part One
 */
const funPartOne = () => {
    const totalRows = orderOfTheCrateArrangement()
    const numbersPerMovementRow = movesOfTheCrates()

    // Use the numbers in the numbersPerMovementRowstring[] as input/code to get the movement coordinations.
    for (let i = 0; i < (numbersPerMovementRow.length); i++) {
    // The first index is the total amount of crates that needs to be moves 
    const amountToMove: number = +numbersPerMovementRow[i][0]
    // The second index is from which row the crates come
    const fromRow: number = +numbersPerMovementRow[i][1]
    // The third index is the row to which the crates go
    const toRow: number = +numbersPerMovementRow[i][2]

    // toBeSpliced is the values that will be spliced from the fromRow value (-1 because indexing start at 0)
    const toBeSpliced = totalRows[fromRow-1].splice(0, amountToMove)
    // addToThisRow is the value of the toRow (-1 because indexing start at 0)
    const addToThisRow = totalRows[toRow-1]
    
    // For loop the iterate over every individual value of toBeSpliced 
    for (let x of toBeSpliced) {
        // Reverse is because push put it at the end of the array but it needs to be at the front
        addToThisRow.reverse().push(x)
        // Reverse it back for the new splicing
        addToThisRow.reverse()
        }
    }
    return totalRows
}   

const funPartTwo = () => {
    const totalRows = orderOfTheCrateArrangement()
    const numbersPerMovementRow = movesOfTheCrates()

    // Use the numbers in the numbersPerMovementRowstring[] as input/code to get the movement coordinations.
    for (let i = 0; i < (numbersPerMovementRow.length); i++) {
    // The first index is the total amount of crates that needs to be moves 
    const amountToMove: number = +numbersPerMovementRow[i][0]
    // The second index is from which row the crates come
    const fromRow: number = +numbersPerMovementRow[i][1]
    // The third index is the row to which the crates go
    const toRow: number = +numbersPerMovementRow[i][2]
    // toBeSpliced is the values that will be spliced from the fromRow value (-1 because indexing start at 0)
    const toBeSpliced = totalRows[fromRow-1].splice(0, amountToMove).reverse()
    // addToThisRow is the value of the toRow (-1 because indexing start at 0)
    const addToThisRow = totalRows[toRow-1]
    
    // For loop the iterate over every individual value of toBeSpliced 
    for (let x of toBeSpliced) {
        // Reverse is because push put it at the end of the array but it needs to be at the front
        addToThisRow.reverse().push(x)
        // Reverse it back for the new splicing
        addToThisRow.reverse()
    }
    }
    return totalRows
}

const answer = () => {
    const totalRowsPartOne = funPartOne()
    const totalRowsPartTwo = funPartTwo()
    // Create empty string that the top values will be added in
    let topValuesPartOne: string = ''
    let topValuesPartTwo: string = ''

    // Iterate over totalrows to get the top value and add it to topValues
    for (let topValue of totalRowsPartOne){
        topValuesPartOne += topValue[0]
    }
    for (let topValue of totalRowsPartTwo){
        topValuesPartTwo += topValue[0]
    }

    console.log(topValuesPartOne)
    console.log(topValuesPartTwo)
}

answer()
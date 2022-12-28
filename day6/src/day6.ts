import { readFileSync } from "fs"

const getInput = () => {
    const data: string = readFileSync('./input.txt', {encoding: "utf-8"})
    return data
}

const findTheMarkerPartOne = () => {
    const data: string[] = getInput().split('')
    let index: number = 0
    let firstMarkerSequence: string[] = []

    for (let i = 4; i < data.length; i++) {
        const splicedPer4: string[] = data.slice(index,i)
        if (new Set(splicedPer4).size == 4) {
            // Like this because otherwise a comma is pushed as well
            firstMarkerSequence.push(splicedPer4[0] + splicedPer4[1] + splicedPer4[2] + splicedPer4[3])
        }
        index += 1
    }
    return firstMarkerSequence[0]
}

const findTheMarkerPartTwo = () => {
    const data: string[] = getInput().split('')
    let index: number = 0
    let firstMarkerSequence: string[] = []

    for (let i = 14; i < data.length; i++) {
        const splicedPer14: string[] = data.slice(index,i)
        if (new Set(splicedPer14).size == 14) {
            console.log(splicedPer14)
            // Like this because otherwise a comma is pushed as well
            firstMarkerSequence.push(splicedPer14[0] + splicedPer14[1] + splicedPer14[2] + splicedPer14[3])
        }
        index += 1
    }
    return firstMarkerSequence[0]
}

findTheMarkerPartTwo()

const answer = () => {
    const data = getInput()
    const firstMarkerSequencePartOne = findTheMarkerPartOne()
    const firstMarkerSequencePartTwo = findTheMarkerPartTwo()

    console.log(data.indexOf(firstMarkerSequencePartOne)+4)
    console.log(data.indexOf(firstMarkerSequencePartTwo)+14)
}

answer()
import {test, readInput} from "../utils/index";

const prepareInput = (rawInput: string) => rawInput.split(/\n/);

const input = prepareInput(readInput());

const goA = (input: string[]) => {
    let i = 0;
    let trees = 0;
    let rowLength = input[0].length - 1;

    for (let j = 0; j < input.length; j++) {
        if (rowLength === i) {
            i = 0;
        } else if ((rowLength - i) < 3) {
            i = rowLength - i
        } else i += 3;

        const pos = input[j].charAt(i);
        if (pos === "#") trees++;
    }

    return trees;
}

const goB = (input) => {
    return
}

/* Tests */

// test(goA(prepareInput(readInput())), 7)

/* Results */

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)

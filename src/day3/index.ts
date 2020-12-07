import {test, readInput} from "../utils/index";

const prepareInput = (rawInput: string) => rawInput.split(/\n/);

const input = prepareInput(readInput());

const goA = (input: string[]) => {
    let i = 0;
    let trees = 0;
    let rowLength = input[0].length - 1;

    for (let j = 1; j < input.length; j++) {
        if ((rowLength - i) < 3) {
            i = i - rowLength - 1
        }
        i += 3;

        const pos = input[j].charAt(i);
        if (pos === "#") trees++;
    }

    return trees;
}

const goB = (input: string[]) => {
    const slopes = [{
        right: 1,
        down: 1
    }, {
        right: 3,
        down: 1
    }, {
        right: 5,
        down: 1
    }, {
        right: 7,
        down: 1
    }, {
        right: 1,
        down: 2
    }]

    const calculateSlope = (input, right, down) => {
        let i = 0;
        let trees = 0;
        let rowLength = input[0].length - 1;

        for (let j = down; j < input.length; j+= down) {
            if ((rowLength - i) < right) {
                i = i - rowLength - 1
            }
            i += right;

            const pos = input[j].charAt(i);
            if (pos === "#") trees++;
        }
        return trees;
    }

    return slopes.reduce((acc, curr) =>
        acc * calculateSlope(input, curr.right, curr.down), 1);
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

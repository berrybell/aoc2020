import {test, readInput} from "../utils/index"

type PasswordRule = { min: number, max: number, sym: string, password: string }

const prepareInput = (rawInput: string) => rawInput

const input: PasswordRule[] = prepareInput(readInput())
    .split(/\n/)
    .map(password => {
        // Example: 15-16 l: klfbblslvjclmlnqklvg
        return {
            min: Number(password.match(/^\d+(?=-)/)[0]),
            max: Number(password.match(/(\d+)(?=\s)/)[0]),
            sym: password.match(/([a-z])(?=:)/)[0],
            password: password.match(/(?<=: )(\w*)/)[0]
        }
    })

const goA = (input: PasswordRule[]) => {
    let counter = 0;
    for (const pw of input) {


        const {min, max, sym, password} = pw;
        console.log(min, max, sym, password);
        const count = (password.match(`/${sym}/g`) || []).length;
        if (count >= min && count <= max) counter++;
    }
    return counter;
}

const goB = (input) => {
    return
}

/* Tests */

// test()

/* Results */

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)

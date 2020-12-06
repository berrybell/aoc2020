import {test, readInput} from "../utils/index"

type PasswordRule = { min: number, max: number, sym: string, password: string }

const prepareInput = (rawInput: string) => rawInput.split(/\n/)
    .map(password => {
        // Example: 15-16 l: klfbblslvjclmlnqklvg
        return {
            min: Number(password.match(/^\d+(?=-)/)[0]),
            max: Number(password.match(/(\d+)(?=\s)/)[0]),
            sym: password.match(/([a-z])(?=:)/)[0],
            password: password.match(/(?<=: )(\w*)/)[0]
        }
    })

const input: PasswordRule[] = prepareInput(readInput())

const goA = (input: PasswordRule[]) => {
    let counter = 0;
    for (const pw of input) {
        const {min, max, sym, password} = pw;
        const regex = new RegExp(`${sym}`, "g");
        const count = (password.match(regex) || []).length;
        if (count >= min && count <= max) counter++;
    }
    return counter;
}

const goB = (input: PasswordRule[]) => {
    let counter = 0;
    for (const pw of input) {
        const {min, max, sym, password} = pw;

        const charAtMin = password.charAt(min + 1);
        const charAtMax = password.charAt(max + 1);

        if (charAtMin !== charAtMax && (charAtMin === sym || charAtMax === sym)) counter++;
    }
    return counter;
}

/* Tests */

test(goA(prepareInput("1-3 a: abcde\n1-3 b: cdefg\n2-9 c: ccccccccc")), 2);
test(goB(prepareInput("1-3 a: abcde\n1-3 b: cdefg\n2-9 c: ccccccccc")), 1);

/* Results */

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)

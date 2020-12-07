import {test, readInput} from "../utils/index"

const prepareInput = (rawInput: string) => rawInput.split(/\n\n/);

const input = prepareInput(readInput());

const fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

const goA = (input: string[]) => {
    let count = 0;
    for (const pass in input) {
        if (fields.every(field => pass.indexOf(field) !== -1)) count++;
    }
    return count;
}

const goB = (input) => {
    return
}

/* Tests */

test(goA(prepareInput("ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n" +
    "byr:1937 iyr:2017 cid:147 hgt:183cm\n" +
    "\n" +
    "iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884\n" +
    "hcl:#cfa07d byr:1929\n" +
    "\n" +
    "hcl:#ae17e1 iyr:2013\n" +
    "eyr:2024\n" +
    "ecl:brn pid:760753108 byr:1931\n" +
    "hgt:179cm\n" +
    "\n" +
    "hcl:#cfa07d eyr:2025 pid:166559648\n" +
    "iyr:2011 ecl:brn hgt:59in")), 2);

/* Results */

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)

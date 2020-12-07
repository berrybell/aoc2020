import {test, readInput} from "../utils/index"

const prepareInput = (rawInput: string) => rawInput.split(/\n\n/);

const input = prepareInput(readInput());

const fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

const goA = (input: string[]) => {
    let count = 0;
    for (const pass of input) {
        if (fields.every(field => pass.indexOf(field) !== -1)) count++;
    }
    return count;
}

const goB = (input: string[]) => {
    let count = 0;

    const validationRules = {
        byr: new RegExp(/(19[2-9]\d)|200[0-2]/),
        iyr: new RegExp(/20(1[0-9]|20)/),
        eyr: new RegExp(/20(2[0-9]|30)/),
        hgt: new RegExp(/(1([5-8][0-9]|9[0-3])cm)|((59|6[0-9]|7[0-6])in)/),
        hcl: new RegExp(/#[0-9,a-f]{6}/),
        ecl: new RegExp(/amb|blu|brn|gry|grn|hzl|oth/),
        pid: new RegExp(/\d{9}/),
    }

    for (const pass of input) {
        if (fields.every(field =>
            pass.indexOf(field) !== -1 && validationRules[field].test(pass)
        )) count++;
    }
    return count;
}

/* Tests */

const invalidPasses = "eyr:1972 cid:100\n" +
    "hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926\n" +
    "\n" +
    "iyr:2019\n" +
    "hcl:#602927 eyr:1967 hgt:170cm\n" +
    "ecl:grn pid:012533040 byr:1946\n" +
    "\n" +
    "hcl:dab227 iyr:2012\n" +
    "ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277\n" +
    "\n" +
    "hgt:59cm ecl:zzz\n" +
    "eyr:2038 hcl:74454a iyr:2023\n" +
    "pid:3556412378 byr:2007";

const validPasses = "pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980\n" +
    "hcl:#623a2f\n" +
    "\n" +
    "eyr:2029 ecl:blu cid:129 byr:1989\n" +
    "iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm\n" +
    "\n" +
    "hcl:#888785\n" +
    "hgt:164cm byr:2001 iyr:2015 cid:88\n" +
    "pid:545766238 ecl:hzl\n" +
    "eyr:2022\n" +
    "\n" +
    "iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719";

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

test(goB(prepareInput(invalidPasses)), 0);
test(goB(prepareInput(validPasses)), 4);

/* Results */

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)

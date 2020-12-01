import { test, readInput } from "../utils/index";

const prepareInput = (rawInput: string) => rawInput;

const input = prepareInput(readInput())
  .split(/\n/)
  .map((i: string) => Number(i))
  .sort((a: number, b: number) => Number(a) - Number(b));

const goA = (input) => {
  let result: number;

  for (const num1 of input) {
    for (const num2 of input) {
      if (num1 + num2 === 2020 && num1 !== num2) {
        result = num1 * num2;
      }
    }
  }
  return result;
};

const goB = (input) => {
  let result: number;

  for (const num1 of input) {
    for (const num2 of input) {
      for (const num3 of input) {
        if (num1 + num2 + num3 === 2020 && num1 !== num2) {
          result = num1 * num2 * num3;
        }
      }
    }
  }
  return result;
};

/* Tests */

test(goA([1721, 979, 366, 299, 675, 1456]), 514579);
test(goB([1721, 979, 366, 299, 675, 1456]), 241861950);

/* Results */

console.time("Time");
const resultA = goA(input);
const resultB = goB(input);
console.timeEnd("Time");

console.log("Solution to part 1:", resultA);
console.log("Solution to part 2:", resultB);

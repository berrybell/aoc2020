import { test, readInput } from "../utils/index";

const prepareInput = (rawInput: string) => rawInput;

const input = prepareInput(readInput());

const goA = (input) => {
  const sortedInput: number[] = input
    .split(/\n/)
    .map((i: string) => Number(i))
    .sort((a: number, b: number) => Number(a) - Number(b));
  let result: number;

  let smallI = 0;
  let largeI = sortedInput.length - 1;

  for (smallI; smallI < sortedInput.length / 2; smallI++) {
    const sum: number = sortedInput[smallI] + sortedInput[largeI];
    console.log("sum", sum);
    console.log("sortedInput[smallI]", sortedInput[smallI]);
    console.log("sortedInput[largeI]", sortedInput[largeI]);
    if (sum == 2020) {
      result = sortedInput[smallI] * sortedInput[largeI];
      return;
    } else {
      if (sum > 2020) {
        largeI--;
      }
    }
  }
  return result;
};

const goB = (input) => {
  return;
};

/* Tests */

test(goA("1721\n979\n366\n299\n675\n1456"), 514579);

/* Results */

console.time("Time");
const resultA = goA(input);
const resultB = goB(input);
console.timeEnd("Time");

console.log("Solution to part 1:", resultA);
console.log("Solution to part 2:", resultB);

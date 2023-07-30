import {
  isPositiveInteger,
  add,
  subtract,
  multiply,
  divide,
  countDigits,
  randomNumInRange,
} from "./lib";

const a = randomNumInRange(1, 2000);
const b = randomNumInRange(-100, 100);

console.log(`a = ${a}, b = ${b}`);
console.log(`a + b = ${add(a, b)}`);
console.log(`a - b = ${subtract(a, b)}`);
console.log(`a * b = ${multiply(a, b)}`);
console.log(`a / b = ${divide(a, b)}`);
console.log(`Number of digits in a: ${countDigits(a)}`);
console.log(`Number of digits in b: ${countDigits(b)}`);

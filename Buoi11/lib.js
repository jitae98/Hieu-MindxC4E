export const isPositiveInteger = (n) => n > 0 && Number.isInteger(n);

export const add = (a, b) => a + b;

export const subtract = (a, b) => a - b;

export const multiply = (a, b) => a * b;

export const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
};

export const countDigits = (n) => n.toString().length;

export const randomNumInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

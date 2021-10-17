const { expect } = require("@jest/globals");
const { capitalize, reverseString, calculator } = require("./functions");

test("capitalize first letter of string", () => {
  expect(capitalize("poop")).toBe("Poop");
});

test("Reverse string", () => {
  expect(reverseString("hello i am happy")).toBe("yppah ma i olleh");
});

test("calculator can add", () => {
  expect(calculator.add(2, 4)).toEqual(6);
});
test("calculator can sbustract", () => {
  expect(calculator.substract(2, 4)).toEqual(-2);
});
test("calculator can multiply", () => {
  expect(calculator.multiply(2, 4)).toEqual(8);
});
test("calculator can divide", () => {
  expect(calculator.divide(2, 4)).toEqual(0.5);
});
test("calculator can multiply more", () => {
  expect(calculator.multiply(7, 4)).toEqual(28);
});

const { expect } = require("@jest/globals");
const analyze = require("./arrayAnalysis");

let testArray = [3, 6, 4, 8, 9, 14, 43, 1, 2];
analyzedObject = analyze(testArray);

test("gets correct average", () => {
  expect(analyzedObject.average).toBe(10);
});
test("gets correct min", () => {
  expect(analyzedObject.min).toBe(1);
});
test("gets correct max", () => {
  expect(analyzedObject.max).toBe(43);
});
test("gets correct length", () => {
  expect(analyzedObject.length).toBe(9);
});

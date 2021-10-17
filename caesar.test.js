const { expect } = require("@jest/globals");
const caesar = require("./caesar");

test("caesars cipher does the encryptrion", () => {
  expect(caesar("i am crazy", 4)).toBe("m eq gvedc");
});

test("encryption maintains capitalization", () => {
  expect(caesar("i am CRazy", 4)).toBe("m eq GVedc");
});

test("Punctutation is kept", () => {
  expect(caesar("They are attacking. Get out now!", 8)).toBe(
    "Bpmg izm ibbiksqvo. Omb wcb vwe!"
  );
});
test("Wraps letters close to end of alphabet", () => {
  expect(caesar("Need to sleep ZZZZZZ", 1)).toBe("Offe up tmffq AAAAAA");
});

function capitalize(str) {
  return str[0].toUpperCase() + str.substr(1);
}

function reverseString(str) {
  let arr = str.split("");
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    newArr.unshift(arr[i]);
  }
  return newArr.join("");
}

const calculator = {
  add: (a, b) => a + b,
  substract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

module.exports = { capitalize, reverseString, calculator };

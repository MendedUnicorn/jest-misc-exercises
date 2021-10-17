const { result } = require("lodash");

function caesar(str, key) {
  //65-90 uppC
  //97-122 lowC

  function covertToAscii(str) {
    newArr = [];
    let arr = str.split("");
    arr.forEach((e) => newArr.push(e.charCodeAt(0)));
    return newArr;
  }
  function applyShift(arr, key) {
    let newArr = [];
    arr.forEach((e) => {
      if (e > 64 && e < 91) {
        if (e + key > 90) {
          newArr.push(e + key - 26);
        } else {
          newArr.push(e + key);
        }
      } else if (e > 96 && e < 123) {
        if (e + key > 122) {
          newArr.push(e + key - 26);
        } else {
          newArr.push(e + key);
        }
      } else {
        newArr.push(e);
      }
    });
    return newArr;
  }

  function convertToString(arr) {
    newArr = [];
    arr.forEach((e) => {
      newArr.push(String.fromCharCode(e));
    });
    return newArr.join("");
  }

  return convertToString(applyShift(covertToAscii(str), key));
}
console.log(caesar("hello", 5));

module.exports = caesar;

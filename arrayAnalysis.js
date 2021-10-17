function analyze(arr) {
  const average =
    arr.reduce((tot, val) => {
      return tot + val;
    }) / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  return {
    average,
    min,
    max,
    length,
  };
}

module.exports = analyze;

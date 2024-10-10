const fibLoop = (n) => {
  if (typeof n !== "number" || n < 0) {
    return null;
  }
  if (n === 0 || n === 1) {
    return n;
  }
  let first = 0;
  let second = 1;
  for (let x = 0; x < n; x++) {
    let temp = second;
    second = first + second;
    first = temp;
  }
  return first;
};

// console.log("1", fibLoop(0)); // 0
// console.log("2", fibLoop(1)); // 1
// console.log("3", fibLoop(2)); // 1
// console.log("4", fibLoop(3)); // 2
// console.log("5", fibLoop(5)); // 3
// console.log("6", fibLoop(6));
// console.log("7", fibLoop(7));
// console.log("8", fibLoop(8));
// console.log("9", fibLoop(9));
// console.log("10", fibLoop(10));

module.exports = fibLoop;

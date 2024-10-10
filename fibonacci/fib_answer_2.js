const fibRecursive = (n) => {
  if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    return fibRecursive(n - 2) + fibRecursive(n - 1);
  }
};

// console.log("1", fibRecursive(1));
// console.log("2", fibRecursive(2));
// console.log("3", fibRecursive(3));
// console.log("4", fibRecursive(4));
// console.log("5", fibRecursive(5));
// console.log("6", fibRecursive(6));
// console.log("7", fibRecursive(7));
// console.log("8", fibRecursive(8));
// console.log("9", fibRecursive(9));
// console.log("10", fibRecursive(10));

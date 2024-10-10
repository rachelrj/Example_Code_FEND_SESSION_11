const fibonacci = require("../fibonacci/fib_answer_1.js");
test("fib 0 returns 0", () => {
  expect(fibonacci(0)).toBe(0);
});
test("fib 1 returns 1", () => {
  expect(fibonacci(1)).toBe(1);
});
test("fib 2 returns 1", () => {
  expect(fibonacci(2)).toBe(1);
});
test("fib 3 returns 2", () => {
  expect(fibonacci(3)).toBe(2);
});
test("fib 4 returns 3", () => {
  expect(fibonacci(4)).toBe(3);
});
test("fib 5 returns 5", () => {
  expect(fibonacci(5)).toBe(5);
});
test("9 returns 34", () => {
  expect(fibonacci(9)).toBe(34);
});

test("43 returns 433494437", () => {
  expect(fibonacci(43)).toBe(433494437);
});
test("fib -1 returns null", () => {
  expect(fibonacci(-1)).toBe(null);
});
